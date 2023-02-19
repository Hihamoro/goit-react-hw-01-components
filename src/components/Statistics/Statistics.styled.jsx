import styled from 'styled-components';

export const Section = styled.section` width: 500px;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
margin-bottom: 60px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #f1f3f4;
`;
export const TitleStatistics = styled.h2` margin-top: 40px;
margin-bottom: 40px;
display: inline-block;
text-transform: uppercase;
color: #6f6c72;
`;
export const List = styled.ul` display: flex;
padding-left: 0;
`;
export const Item = styled.li` padding-bottom: 10px;
padding-top: 10px;
display: flex;
flex-direction: column;
text-align: center;
gap: 10px;
width: 100px;
color: white;

background-color: ${props => {
        switch (props.type) {
            case '.docx':
                return '#26bfbf';
            case '.pdf':
                return '#ff7fff';
            case '.mp3':
                return '#ffe766';
            case '.psd':
                return '#a8acd2';
            default:
                return '#f0f1f7';
        }
    }
    }

;
`;
export const Percentage = styled.span` font-size: 20px;
`;