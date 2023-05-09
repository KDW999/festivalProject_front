import { Box, Card, Grid, Pagination, Stack, Typography } from '@mui/material'
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import ResponseDto from 'src/apis/response';
import {  GetInterstFestivalListResponseDto } from 'src/apis/response/festival';
import FestivalListItem from 'src/components/FestivalListItem';
import { GET_INTERESTED_FESTIVAL_LIST_URL, authorizationHeader } from 'src/constants/api';
import { usePagingHook } from 'src/hooks';
import { IPfestivalReviewBoard} from 'src/interfaces';
import { getpagecount } from 'src/utils';


export default function FestivalBoard() {
  //              HOOK              //

 
  const [cookies] = useCookies();
  const accessToken = cookies.accessToken;
  const{festivalList, viewList, pageNumber, onPageHandler, COUNT, setFestivalList}=usePagingHook(2);


  //          EVENT HANDLER           //
const getInterestedFestivalList=(accessToken:string)=>{
  axios 
  .get(GET_INTERESTED_FESTIVAL_LIST_URL,authorizationHeader(accessToken))
  .then((response)=>getInterestedFestivalListResponseHandler(response))
  .catch((error)=>getInterestedFestivalErrorHandler(error))
}


//          Response Handler          //


const getInterestedFestivalListResponseHandler =(response:AxiosResponse<any,any>)=>{
  const {result,message,data}=response.data as ResponseDto<GetInterstFestivalListResponseDto[]>
  if(!result || data === null) return;
  setFestivalList(data);
  console.log("data"+data)
  

}
  


 //          Error Handler          //

 const getInterestedFestivalErrorHandler = (error: any) => {
  console.log(error.message);
}






  //          Use effect        //
  useEffect(() => {
   
  }, [getInterestedFestivalList(accessToken)]);

  return (
    <Box sx={{ width: '100%', height: '100%'}}>
      <Box sx={{ pt: '20px', pb: '80px'}}>
        <Box sx={{ display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', mb:'50px' }}>
          <Typography sx={{ fontSize:'36px', fontWeight:900, color:'#222' }}>관심있는 축제</Typography>
          <Box sx={{ width:'30px', height:'4px', backgroundColor:'#ff9f40', mt:'5px' }}></Box>
        </Box>
        <Box >
        <Grid container spacing={3} sx={{display:'flex',justifyContent:'center'}} >
          <Grid item sm={12} md={8}  >
            <Stack spacing={2}>
            {viewList.map((festivalItem) => (<FestivalListItem festivalList={festivalItem as GetInterstFestivalListResponseDto} />))}
            </Stack>
          </Grid>
        </Grid>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center'}} >
          <Pagination  sx={{mt:'20px',ml:'20px',mr:'20px'}} page={pageNumber} count={getpagecount(festivalList,COUNT)} onChange={(event, value) => onPageHandler(value)} />
        </Box>
      </Box>
    </Box>
  )
}