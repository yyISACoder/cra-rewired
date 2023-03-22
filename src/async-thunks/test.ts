import request from '@/utils/request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { testUrl } from '@/const/url';
import { testAsync } from '@/const/asyncThunkName';

export const testAsyncThunk = createAsyncThunk(testAsync, async () => {
  const response = await request.get(testUrl);
  return response;
});
