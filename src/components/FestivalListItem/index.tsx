import React from 'react'
import { Box, Card, CardActionArea, Divider, Typography } from '@mui/material';
import { IPreviewFestivalItem } from 'src/interfaces';
import { useNavigate } from 'react-router-dom';
import { GetInterstFestivalListResponseDto } from 'src/apis/response/festival';

interface Props{
    festivalList:GetInterstFestivalListResponseDto
}

export default function FestivalListItem({ festivalList }: Props) {
    const nagigator=useNavigate();

    return (
        <Card variant='outlined' >
            <CardActionArea sx={{ m: '20px,0px,20px ', display: 'flex', justifyContent: 'space-between', p: '15px', backgroundColor: '#ffffff'  }} onClick={()=>nagigator('/fetivalview')} >
                <Box sx={{ height: '200px', display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
                    <Box  >
                        <Typography sx={{fontWeight:900,fontSize:'14px',m:'10px'}}>{festivalList.festivalName}</Typography>
                        <Box>
                            <Divider />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{m:'10px' ,fontSize:'11px', color:'#333'}}>개요:{festivalList.festivalType}  기간:{festivalList.festivalDurationStart}~{festivalList.festivalDurationEnd} 시간:{festivalList.festivalTime}</Typography>
                        <Typography sx={{m:'10px' ,fontSize:'11px', color:'#333'}}>장소:{festivalList.festivalArea} 요금:{festivalList.festivalCost} 관관객평점:{festivalList.onelineReviewAverage}</Typography>
                        <Box>
                            <Divider />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{m:'10px' ,fontSize:'12px',overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', color: '#444'}}>{festivalList.festivalInformation}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box component={'img'} src={festivalList.festivalInformationUrl as string} sx={{ ml: '10px',height: '200px', width: '200px', borderRadius: '5%' }}></Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}