import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';
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

const AlertSettingTable = ({ChangeToInfoScreen}) => {
    const {listAlertSetting,loading} = useSelector(store => store.alertSetting)
    console.log(listAlertSetting)
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
        title: 'Alert Name',
        dataIndex: 'alertName',
        key: 'alertName',
        ...getColumnSearchProps('alertName'),
      },
      {
        title: 'Employee Name',
        dataIndex: 'employeeName',
        key: 'employeeName',
        width: '15%',
        ...getColumnSearchProps('employeeName'),
        render: (_,{employee}) => {
          return employee.name
        }
      },
      {
        title: 'Area Name',
        dataIndex: 'areaName',
        key: 'areaName',
        width: '15%',
        ...getColumnSearchProps('aareaNamege'),
        render: (_,{area}) => {
          return area.areaName
        }
      },
      {
        title: 'Start Time',
        dataIndex: 'startTime',
        key: 'startTime',
        width: '10%',
       
      },
      {
        title: 'End Time',
        dataIndex: 'endTime',
        key: 'endTime',
        width: '10%',
   
      },
      {
        title: 'Security Level',
        dataIndex: 'secLevel',
        key: 'secLevel',
        width: '10%',
   
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'action',
        width: '15%',
        render: (_, row) => {
          return <>
            <Button onClick={() => {
              ChangeToInfoScreen(row)
            }} style={{ marginRight: "10px" }}>Edit</Button>
            <Button  type='primary' danger>Delete</Button>
          </>
        }
      },
    ];
    return <Table pagination={{pageSize: 6}} columns={columns} dataSource={listAlertSetting} />;
}

export default AlertSettingTable