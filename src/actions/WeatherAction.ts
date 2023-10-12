export const setInitialData = (data: any) => ({
    type: 'SET_INITIAL_DATA',
    payload: data,
});
  

export const setDegreeType = (data: string) => ({
  type: 'SET_DEGREE_TYPE',
  payload: data,
});

export const setData = (data: any) => ({
  type: 'SET_CURRENT_WEATHER',
  payload: data,
});

export const setHourlyData = (data: any) => ({
    type: 'SET_HOURLY_WEATHER',
    payload: data
});

export const setCity = (data: any) => ({
    type: 'SET_CITY',
    payload: data
});

export const setDailyData = (data: any) => ({
    type: 'SET_DAILY_WEATHER',
    payload: data
});

