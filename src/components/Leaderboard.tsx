"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMediaQuery, useTheme } from "@mui/material";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export interface ModelData {
  model: string;
  Size: string;
  CNN: number;
  XSum: number;
  MediaS: number;
  MeetB: number;
  Wice: number;
  REVEAL: number;
  ClaimVerify: number;
  FactCheck: number;
  ExpertQA: number;
  LFQA: number;
  RAGTruth: number;
  link: string;
  color?: string;
  [key: string]: string | number | undefined;
}

const columnToPrettyName: { [key: string]: string } = {
  ClaimVerify: "Claim Verify",
  FactCheck: "Fact Check",
  ExpertQA: "Expert QA",
  RAGTruth: "RAG Truth",
};

interface LeaderboardProps {
  scoresData: ModelData[];
}

const normalizeScore = (value: number, min: number, max: number): number =>
  Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

export default function Leaderboard({ scoresData }: LeaderboardProps) {
  const allColumns = Object.keys(scoresData[0]).filter(
    (key) => !["model", "Size", "Average", "color", "link"].includes(key)
  ) as (keyof ModelData)[];
  const allModels = scoresData.map((item) => item.model);
  const colorPalette = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

  const [chartFontSize, setChartFontSize] = useState("15px");
  const [selectedColumns, setSelectedColumns] =
    useState<(keyof ModelData)[]>(allColumns);
  const [selectedModels, setSelectedModels] = useState<string[]>([
    "Claude-3 Opus",
    "gpt-4o-2024-05-13",
    "Llama-3.1-405B-Instruct",
    "Mistral-Large 2",
    "Bespoke-Minicheck-7B",
  ]);
  const [sortColumn, setSortColumn] = useState<NumericDataColumn>("Average");
  const [maxNumModelsOptions, setMaxNumModelsOptions] = useState<number>(3);
  const [maxNumColumnsOptions, setMaxNumColumnsOptions] = useState<number>(3);

  const filteredData = useMemo(
    () => scoresData.filter((item) => selectedModels.includes(item.model)),
    [selectedModels, scoresData]
  );

  const dataWithAverages = useMemo<ModelData[]>(
    () =>
      filteredData.map((item) => ({
        ...item,
        Average: calculateAverage(item, selectedColumns),
      })),
    [filteredData, selectedColumns]
  );

  const sortedData = useMemo(
    () =>
      [...dataWithAverages].sort(
        (a, b) => (b[sortColumn] as number) - (a[sortColumn] as number)
      ),
    [dataWithAverages, sortColumn]
  );

  const metricRanges = useMemo(() => {
    const ranges: { [key: string]: { min: number; max: number } } = {};
    allColumns.forEach((column) => {
      const values = scoresData.map((item) => item[column] as number);
      const dbg = scoresData.map((item) => ({
        model: item["model"],
        column: item[column],
      }));
      ranges[column] = {
        min: Math.floor(Math.min(...values)),
        max: Math.ceil(Math.max(...values)),
      };
    });
    return ranges;
  }, [allColumns, scoresData]);

  const chartData = useMemo(
    () =>
      selectedColumns.map((column) => {
        const entry: { [key: string]: string | number } = {
          column: column as string,
        };
        filteredData.forEach((item) => {
          const { min, max } = metricRanges[column];
          if (column == "ExpertQA") {
            entry[item.model] = normalizeScore(item[column] as number, 0, max);
          } else {
            entry[item.model] = normalizeScore(
              item[column] as number,
              min,
              max
            );
          }
        });
        return entry;
      }),
    [selectedColumns, filteredData, metricRanges]
  );

  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    if (isXl) {
      setChartFontSize("15px");
      setMaxNumModelsOptions(1);
      setMaxNumColumnsOptions(2);
    } else if (isLg) {
      setChartFontSize("12px");
      setMaxNumModelsOptions(1);
      setMaxNumColumnsOptions(1);
    } else if (isMd || isSm) {
      setChartFontSize("12px");
      setMaxNumModelsOptions(3);
      setMaxNumColumnsOptions(5);
    } else {
      setChartFontSize("10px");
      setMaxNumModelsOptions(1);
      setMaxNumColumnsOptions(1);
    }
  }, [isXl, isLg, isMd, isSm]);

  const modelOptions: Option[] = allModels.map((model) => ({
    label: model,
    value: model,
  }));
  const columnOptions: Option[] = allColumns.map((column) => ({
    label: column as string,
    value: column as string,
  }));

  return (
    <div className="flex flex-col items-stretch p-4">
      <div className="flex lg:flex-row flex-col shadow border rounded-lg p-2 inline-flex mb-4">
        <div className="flex lg:w-1/2">
          <ModelSelector
            options={modelOptions}
            value={selectedModels}
            onChange={setSelectedModels}
            maxCount={maxNumModelsOptions}
          />
        </div>
        <div className="flex lg:w-1/2">
          <ColumnSelector
            options={columnOptions}
            value={selectedColumns as string[]}
            onChange={setSelectedColumns}
            maxCount={maxNumColumnsOptions}
          />
        </div>
      </div>
      {selectedModels.length > 0 && selectedColumns.length > 0 ? (
        <Card className="mb-4 rounded-lg shadow-0">
          <CardHeader className="flex  flex-row items-stretch space-y-0 border-b p-0 mb-6">
            <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 border-r">
              <CardTitle className="text-lg sm:text-xl">
                Model Comparison
              </CardTitle>
              <CardDescription className="sm:text-sm text-xs">
                Compare model performance across different datasets.
              </CardDescription>
            </div>
            <div className="flex flex-col items-center justify-center sm:px-6 sm:py-4 px-3 py-2">
              <h2 className="font-bold text-accented tracking-tight sm:text-xl text-lg">
                {selectedModels.length} / {modelOptions.length}{" "}
              </h2>
              <span className="text-muted-foreground sm:text-sm text-xs text-center">
                selected / available models
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <RadarChartComponent
              chartData={chartData}
              filteredData={filteredData}
              colorPalette={colorPalette}
              chartFontSize={chartFontSize}
            />
          </CardContent>
        </Card>
      ) : (
        <div className="border p-2 shadow mb-4">
          <p className="text-muted-foreground">
            Please select a model or a column to display data.
          </p>
        </div>
      )}
      {selectedModels.length > 0 && (
        <div className="mb-4">
          <TableComponent
            sortedData={sortedData}
            selectedColumns={selectedColumns}
            sortColumn={sortColumn}
            requestSort={setSortColumn}
          />
        </div>
      )}
    </div>
  );
}

// Type definitions
type Option = { label: string; value: string };
type NumericDataColumn =
  | Exclude<keyof ModelData, "model" | "Size" | "color" | "link">
  | "Average";

// Utility functions
const isNumber = (value: any): value is number =>
  typeof value === "number" && !isNaN(value);

const calculateAverage = (
  item: ModelData,
  columns: (keyof ModelData)[]
): number => {
  const numericValues = columns.map((column) => item[column]).filter(isNumber);
  return numericValues.length > 0
    ? Number(
        (
          numericValues.reduce((acc, val) => acc + val, 0) /
          numericValues.length
        ).toFixed(1)
      )
    : 0;
};

// Components
interface SelectorProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  maxCount: number;
}

const ModelSelector: React.FC<SelectorProps> = ({
  options,
  value,
  onChange,
  maxCount,
}) => (
  <div className="flex flex-col mr-4 lg:mb-0 mb-2">
    <MultiSelect
      options={options}
      onValueChange={onChange}
      defaultValue={value}
      placeholder="Select models"
      maxCount={maxCount}
    />
  </div>
);

const ColumnSelector: React.FC<SelectorProps> = ({
  options,
  value,
  onChange,
  maxCount,
}) => (
  <div className="flex-grow mr-4">
    <MultiSelect
      options={options}
      onValueChange={onChange}
      defaultValue={value}
      placeholder="Select columns"
      maxCount={maxCount}
    />
  </div>
);

interface RadarChartComponentProps {
  chartData: any[];
  filteredData: ModelData[];
  colorPalette: string[];
  chartFontSize: string;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({
  chartData,
  filteredData,
  colorPalette,
  chartFontSize,
}) => {
  const getColor = (item: ModelData, index: number) => {
    if (item.color) {
      return item.color;
    }
    return colorPalette[index % colorPalette.length];
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:items-stretch items-center">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="flex-grow sm:min-h-[400px] sm:min-w-[400px] sm:w-full sm:h-full min-h-[200px] min-w-[200px] items-center"
      >
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="column" tick={{ fontSize: chartFontSize }} />
          <PolarRadiusAxis
            domain={[0, 100]}
            tickCount={10}
            tickLine={false}
            axisLine={false}
            tick={false}
          />
          {filteredData.map((item, index) => (
            <Radar
              key={item.model}
              name={item.model}
              dataKey={item.model}
              stroke={getColor(item, index)}
              fill={getColor(item, index)}
              fillOpacity={0.4}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex items-center mt-4 lg:mt-0 lg:ml-4 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[400px] max-h-[100px] lg:min-w-[200px]">
        <div className="flex flex-col">
          {filteredData.map((item, index) => (
            <div
              key={item.model}
              className="flex items-center mb-2 mr-4 lg:mr-0 flex-shrink-0"
            >
              <div
                className="w-3 h-3 mr-2 rounded-full"
                style={{
                  backgroundColor: getColor(item, index),
                }}
              />
              <span className="text-sm whitespace-nowrap">{item.model}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface TableComponentProps {
  sortedData: ModelData[];
  selectedColumns: (keyof ModelData)[];
  sortColumn: NumericDataColumn;
  requestSort: (column: NumericDataColumn) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  sortedData,
  selectedColumns,
  sortColumn,
  requestSort,
}) => (
  <Table className="table-fixed">
    <TableHeader>
      <TableRow>
        <TableHead className="w-20">Model</TableHead>
        <TableHead className="w-14">Size</TableHead>
        <TableHead
          className="bg-accent text-accent-foreground cursor-pointer w-20 break-words"
          onClick={() => requestSort("Average")}
        >
          <div className="whitespace-normal overflow-hidden break-words">
            <span>Average</span>
            {sortColumn === "Average" && (
              <ArrowDown className="h-4 w-4 flex-shrink-0 inline" />
            )}
          </div>
        </TableHead>

        {selectedColumns.map((column) => (
          <TableHead
            key={column}
            onClick={() => requestSort(column as NumericDataColumn)}
            className="w-20 break-words text-center"
          >
            <div className="whitespace-normal overflow-hidden break-words">
              <span>
                {column in columnToPrettyName
                  ? columnToPrettyName[column as string]
                  : column}
              </span>
              {sortColumn === column && (
                <ArrowDown className="h-4 w-4 flex-shrink-0 inline" />
              )}
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {sortedData.map((item, index) => (
        <TableRow key={index}>
          <TableCell>
            <Link
              className="text-primary hover:text-gray-400 transition-colors duration-200"
              href={item.link}
            >
              {item.model}
            </Link>
          </TableCell>
          <TableCell>{item.Size}</TableCell>
          <TableCell className="bg-accent text-accent-foreground">
            {(item.Average as number).toFixed(1)}
          </TableCell>
          {selectedColumns.map((column) => (
            <TableCell className="text-center" key={column}>
              {isNumber(item[column])
                ? (item[column] as number).toFixed(1)
                : item[column]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
