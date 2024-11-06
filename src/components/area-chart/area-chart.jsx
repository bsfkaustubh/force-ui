import { useEffect, useState } from 'react';
import {
	AreaChart as AreaChartWrapper,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import ChartLegendContent from './chart-legend-content';
import ChartTooltipContent from './chart-tooltip-content';
import Label from '../label';

const AreaChart = ({
	data,
	dataKeys,
	colors = [],
	variant = 'solid',
	showXAxis = true,
	showYAxis = true,
	showTooltip = true,
	tooltipIndicator = 'dot', // dot, line, dashed
	tooltipLabelKey,
	showLegend = true,
	showCartesianGrid = true,
	tickFormatter,
	xAxisDataKey,
	yAxisDataKey,
	xAxisFontSize = 'sm', // sm, md, lg
	xAxisFontColor = '#4B5563',
	chartWidth = 350,
	chartHeight = 200,
}) => {
	const [width, setWidth] = useState(chartWidth);
	const [height, setHeight] = useState(chartHeight);

    // Default colors
    const defaultColors = [
        { stroke: '#2563EB', fill: '#BFDBFE' },
        { stroke: '#38BDF8', fill: '#BAE6FD' },
    ];

    const appliedColors = colors.length > 0 ? colors : defaultColors;

	useEffect(() => {
		setWidth(chartWidth);
		setHeight(chartHeight);
	}, [chartWidth, chartHeight]);

	const fontSizeMap = {
		sm: '12px',
		md: '14px',
		lg: '16px',
	};

	const fontSizeVariant = fontSizeMap[xAxisFontSize] || fontSizeMap.sm;

	const renderGradients = () => (
		<defs>
            {appliedColors.map((color, index) => (
				<linearGradient
					key={`gradient${index}`}
					id={`fill${index}`}
					x1="0"
					y1="0"
					x2="0"
					y2="1"
				>
					<stop
						offset="5%"
						stopColor={color.fill}
						stopOpacity={0.8}
					/>
					<stop
						offset="95%"
						stopColor={color.fill}
						stopOpacity={0.1}
					/>
				</linearGradient>
			))}
		</defs>
	);

    if (!data || data.length === 0 ) {
        return (
            <Label
                size="sm"
                variant="help"
            >
                No data available
            </Label>
        );
    }

	return (
		<ResponsiveContainer width={width} height={height}>
			<AreaChartWrapper data={data} margin={{ left: 14, right: 14 }}>
				{showCartesianGrid && <CartesianGrid vertical={false} />}
				{showXAxis && (
					<XAxis
						dataKey={xAxisDataKey}
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={tickFormatter}
						tick={{
							fontSize: fontSizeVariant,
							fill: xAxisFontColor,
						}}
					/>
				)}
				{showYAxis && (
					<YAxis
						dataKey={yAxisDataKey}
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tick={{
							fontSize: fontSizeVariant,
							fill: xAxisFontColor,
						}}
					/>
				)}
				{showTooltip && (
					<Tooltip
						content={
							<ChartTooltipContent
								indicator={tooltipIndicator}
								labelKey={tooltipLabelKey}
							/>
						}
					/>
				)}
				{showLegend && (
					<Legend
						content={
							<ChartLegendContent
								fontSizeVariant={fontSizeVariant}
							/>
						}
					/>
				)}

				{variant === 'gradient' && renderGradients()}

				{dataKeys.map((key, index) => (
					<Area
						key={key}
						type="monotone"
						dataKey={key}
                        stroke={appliedColors[index % appliedColors.length].stroke}
                        fill={
                            variant === 'gradient'
                                ? `url(#fill${index})`
                                : appliedColors[index % appliedColors.length].fill
                        }
						stackId="1"
					/>
				))}
			</AreaChartWrapper>
		</ResponsiveContainer>
	);
};

export default AreaChart;