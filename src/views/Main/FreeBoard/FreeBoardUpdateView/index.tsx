import React, { KeyboardEvent, MouseEvent, useEffect, useState } from 'react'
import {
  Box, Divider, Fab, FormControl,
  Grid, IconButton, Input, InputAdornment, OutlinedInput, Typography
} from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { Festival } from 'src/interfaces';
import { SIMPLELIST } from 'src/mock';
import FestivalNameItemList from 'src/components/FestivalNameItemList';
import { PatchFreeBoardRequestDto } from 'src/apis/request/freeboard';
import axios, { AxiosResponse } from 'axios';
import { GET_FREE_BOARD_URL, PATCH_FREE_BOARD_URL, authorizationHeader } from 'src/constants/api';
import { useCookies } from 'react-cookie';
import ResponseDto from 'src/apis/response';
import { GetFreeBoardResponseDto, PatchFreeBoardResponseDto } from 'src/apis/response/freeboard';
import { useSignInStore } from 'src/stores';
import { useImageUploadHook } from 'src/hooks';

export default function FreeBoardUpdateView() {
  const navigator = useNavigate();

  const {signInUser} = useSignInStore();
  const {freeBoardNumber} = useParams();
  const [cookies] = useCookies();

  const { freeBoardImgUrl, setFreeBoardImgUrl, onImageUploadChangeHandler, onImageUploadButtonHandler, imageRef } = useImageUploadHook();
  
  const [freeBoardTitle, setFreeBoardTitle] = useState<string>('');
  const [freeBoardContent, setFreeBoardContent] = useState<string>('');

  const [festivalNameList, setFestivalNameList] = useState<Festival[]>([]);
  const accessToken = cookies.accessToken;

  //          Event Handler          //
  const onContentKeyPressHandler = (event : KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;
    setFreeBoardContent(freeBoardContent + '\n');
  }

  const onBoardWriteHandler = () => {
    if (!freeBoardTitle.trim()) {
      alert('제목이 입력되지 않았습니다.')
      return;
    }
    if (!freeBoardContent.trim()) {
      alert('내용이 입력되지 않았습니다.')
      return;
    }
    patchFreeBoard();
    navigator('/freeboard/list');
  }

  const getFreeBoard = () => {
    axios.get(GET_FREE_BOARD_URL(freeBoardNumber as string))
        .then((response) => getFreeBoardResponse(response))
        .catch((error) => getFreeBoardError(error))
  }

  const getFreeBoardResponse = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<GetFreeBoardResponseDto>
    if (!result || data === null) {
      alert(message);
      return;
    }
    const { freeBoardTitle, freeBoardContent, freeBoardImgUrl, writerUserId } = data.freeBoard
    if (writerUserId !== signInUser?.userId) {
      alert('권한이 없습니다.');
      navigator('/');
      return;
    }

    setFreeBoardTitle(freeBoardTitle);
    setFreeBoardContent(freeBoardContent);
    if (freeBoardImgUrl) setFreeBoardImgUrl(freeBoardImgUrl);
  }

  const getFreeBoardError = (error: any) => {
    console.log(error.message);
  }

  const patchFreeBoard = () => {
    const data: PatchFreeBoardRequestDto = { freeBoardNumber: parseInt(freeBoardNumber as string), freeBoardTitle, freeBoardContent, freeBoardImgUrl: '' };

    axios.patch(PATCH_FREE_BOARD_URL, data, authorizationHeader(accessToken))
        .then((response) => patchFreeBoardResponse(response))
        .catch((error) => patchFreeBoardError(error))
  }

  const patchFreeBoardResponse = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<PatchFreeBoardResponseDto>
    if (!result || data === null){
      alert(message);
      return;
    }
    navigator(`/freeboard/detail/${freeBoardNumber}`);
  }

  const patchFreeBoardError = (error: any) => {
    console.log(error.message);
  }

  useEffect(() => {
    if (!freeBoardNumber) {
      navigator("/free-board/list");
      return;
    }

    if (!accessToken) {
      navigator("/auth/sign-in");
      return;
    }
    getFreeBoard();
  }, [])

  return (
    <Box sx={{ backgroundColor: '#c0c0c0', height : '100%' }}>
      <Divider />
      <Box sx={{ ml: '200px', mr: '200px', p: '100px 50px', backgroundColor: '#ffffff' }}>
        <Box>
          <Box sx={{ mb: '220px', mr: '30px', ml: '30px', display: 'flex', justifyContent: 'space-between' }}>

            <Box>
            </Box>

            <Box >
            </Box>

            <Box>
            <IconButton onClick={() => onImageUploadButtonHandler()}>
                <InsertPhotoOutlinedIcon />
                <input 
                ref = {imageRef}
                hidden type = 'file'
                accept = 'image/*'
                onChange={(event) => onImageUploadChangeHandler(event)}
                onKeyDown={(event) => onContentKeyPressHandler(event)}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
        
            <Box>
            <Input fullWidth disableUnderline placeholder='제목을 작성해주세요.'
              sx={{ fontSize: '34px', fontWeight: 600, color: '#2f4f4f'}} value={freeBoardTitle}
              onChange={(event) => setFreeBoardTitle(event.target.value)} />
            </Box>
            <Divider sx={{ mt: '35px', mb: '45px', ml: '20px', mr: '20px' }} />
            <Box>
            <Typography>
              <Input
                fullWidth disableUnderline placeholder='본문을 작성해주세요.'
                multiline minRows={1} value={freeBoardContent}
                sx={{ fontSize: '18px', fontWeight: 600 }}
                onChange={(event) => setFreeBoardContent(event.target.value)}
                onKeyPress={(event) => onContentKeyPressHandler(event)}/>
                <Box sx={{ width: '100%' }} component='img' src={freeBoardImgUrl}></Box>
            </Typography>
            </Box>
          
      </Box>

      <Fab sx={{ position: 'fixed', zIndex: 999, bottom: '200px', right: '240px', backgroundColor: '#f0fff0' }}
        onClick={onBoardWriteHandler}>
        <ModeEditOutlineOutlinedIcon />
      </Fab>
    </Box>
  )
}