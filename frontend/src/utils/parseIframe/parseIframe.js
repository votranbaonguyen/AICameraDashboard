import parse from 'html-react-parser';

export function parseIframe(iframe) {
    const newIframe = iframe.replace("/","")
    return parse(newIframe)
    
}