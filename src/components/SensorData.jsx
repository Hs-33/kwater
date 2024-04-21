// 아 일단 json 파일로 저장해
// 그리고 수치 같은 것들 넣어
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../db.json';

const SensorData = () => {
    const [lastEntryData, setLastEntryData] = useState({});

    useEffect(() => {
        if (data.length > 0) {
            const lastEntry = data[data.length - 1];
            setLastEntryData(lastEntry);
        }
    }, []);

    return (
        <SensorContainer>
            <SensorBox>
                {lastEntryData && lastEntryData.탁도 ? (
                    <SensorInfo>
                        <InfoText><strong>탁도: </strong> {lastEntryData.탁도.toFixed(3)}&nbsp;NTU</InfoText>
                        <InfoText><strong>pH: </strong>{lastEntryData.pH.toFixed(3)}</InfoText>
                        <InfoText><strong>수온: </strong>{lastEntryData.수온.toFixed(3)}&nbsp;℃</InfoText>
                        <InfoText><strong>전기전도도: </strong>{lastEntryData.전기전도도.toFixed(3)}&nbsp;mS/cm</InfoText>
                        <InfoText><strong>알칼리도: </strong>{lastEntryData.알칼리도.toFixed(3)}&nbsp;mg/L</InfoText>
                    </SensorInfo>
                ) : (
                    console.log("No data available.")
                )}
            </SensorBox>
        </SensorContainer>
    );
};

export default SensorData;

const SensorContainer = styled.div` 
    text-align: left;
`;

const SensorBox  = styled.div`
    width: 350px; 
    height: 350px; 
    margin-top: 50px;
    padding-right: 100px;
    background: white; 
    border-radius: 20px; 
    border: 3px #F9B20A solid; 
    align-items: center; 
    display: inline-flex
`;

const SensorInfo  = styled.div`
    padding-left: 30px;
`;

const InfoText = styled.p`
    font-size : 25px;
`;