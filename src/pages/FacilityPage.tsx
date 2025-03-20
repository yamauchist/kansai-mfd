import React, { useState } from "react";
import { Card, CardContent, CardActionArea, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Button } from "@mui/material";
import facilitiesYaml from '../facilities.yaml';
import Facility from "../interfaces/Facility";

const facilities: Facility[] = facilitiesYaml as Facility[];

export const FacilityPage: React.FC = () => {
    const [sortOrder, setSortOrder] = useState("name");
    const [viewType, setViewType] = useState("grid");
  
    return (
      <div className="p-4">
        {/* 検索条件ボタン */}
        <div className="mt-4">
          <Button variant="outlined" className="border-gray-500 text-gray-700">Search Filters</Button>
        </div>
  
        {/* 表示順 & 表示形式 */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="bg-white">
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="location">Location</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>View Type</InputLabel>
            <Select value={viewType} onChange={(e) => setViewType(e.target.value)} className="bg-white">
              <MenuItem value="grid">Grid</MenuItem>
              <MenuItem value="list">List</MenuItem>
            </Select>
          </FormControl>
        </div>
  
        {/* コンサートホール一覧 */}
        <div className={`mt-4 grid ${viewType === "grid" ? "grid-cols-3 gap-4" : "grid-cols-1"}`}>
          {facilities.map((hall) => (
            <Card key={hall.施設名} className="shadow-lg rounded-lg overflow-hidden">
              <CardActionArea>
                <CardContent className="p-4">
                  <Typography variant="h6" className="text-lg font-semibold">{hall.施設名}</Typography>
                  <Typography variant="body2" color="textSecondary" className="text-gray-600">{hall.都道府県}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
  }