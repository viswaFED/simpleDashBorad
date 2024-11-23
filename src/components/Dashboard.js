import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import { selectBubble, resetFilter } from '../store/dataSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  const handleBubbleClick = (id) => {
    dispatch(selectBubble(id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'x', headerName: 'X Value', width: 130 },
    { field: 'y', headerName: 'Y Value', width: 130 },
    { field: 'size', headerName: 'Size', width: 120 },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center" fontWeight={600}>
        Dashboard
      </Typography>

      {/* Main Grid Container */}
      <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>
        {/* Bubble Chart Section */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Bubble Chart
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                  <XAxis dataKey="x" name="X Axis" />
                  <YAxis dataKey="y" name="Y Axis" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter
                    name="Bubbles"
                    data={filteredData}
                    fill="#8884d8"
                    onClick={(e) => handleBubbleClick(e.id)}
                    shape="circle"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Data Grid Section */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Data Grid
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={filteredData}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Reset Filter Button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(resetFilter())}
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#1976d2',
              boxShadow: 3,
            },
          }}
        >
          Reset Filters
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
