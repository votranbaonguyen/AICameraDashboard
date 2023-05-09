import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import ViewCameraModal from './ViewCameraModal';
import { deleteCamera, getAllCamera } from '../../redux/camera/cameraSlice';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export const MyCameraTable = ({ ChangeToInfoScreen }) => {
  const { listCamera, loading } = useSelector(store => store.camera)
  console.log(loading)
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resource, setResource] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Camera Name',
      dataIndex: 'camName',
      key: 'camName',
      width: '30%',
      ...getColumnSearchProps('camName'),
    },
    {
      title: 'Area',
      dataIndex: 'areaId',
      key: 'areaId',
      width: '20%',
      ...getColumnSearchProps('areaId'),
      render: (_,record) =>{
        return record.area ? record.area.areaName : "No Area"
      }
    },
    {
      title: 'Connection',
      dataIndex: 'connectionState',
      key: 'connectionState',
      width: '20%',
      render: (_, record) => {
        if (record.connectionState) {
          return <Tag color={'green'} key={"Connected"}>
            Connected
          </Tag>
        } else {
          return <Tag color={'volcano'} key={"Disconnected"}>
            Disconnected
          </Tag>
        }
      }
    },
    {
      title: 'Security Level',
      dataIndex: 'securityLevel',
      key: 'securityLevel',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      width: '15%',
      render: (_, row) => {
        return <>
          <Button onClick={() => {ChangeToInfoScreen(row)}} style={{ marginRight: "10px" }}>Edit</Button>
          <Button className='delete-btn' onClick={async () => {
            await dispatch(deleteCamera(row.camId))
            dispatch(getAllCamera())
            }} type='primary' danger>Delete</Button>
        </>
      }
    },
  ];
  return (
    <>
      <ViewCameraModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} resource={resource} setResource={setResource} />
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              if(!e.target.parentNode.classList.contains("delete-btn")){
                showModal()
                setResource(record.resource)
              }
            }
          }
        }}
        columns={columns}
        dataSource={listCamera}
        loading={loading}
      />
    </>
  )
}
