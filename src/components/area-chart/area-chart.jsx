import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import ChartLegendContent from './chart-legend-content';

const AreaChartComponent = ({
	data,
	dataKeys,
	colors,
	variant = 'solid',
	showXAxis = true,
	showYAxis = true,
	showTooltip = true,
	showLegend = true,
	showCartesianGrid = true,
	tickFormatter,
	xAxisDataKey,
	yAxisDataKey,
	xAxisFontSize = 'sm', // sm, md, lg
    xAxisFontColor = "#4B5563",
	chartWidth = 350,
	chartHeight = 200,
}) => {

    const fontSizeMap = {
        sm: '12px',
        md: '14px',
        lg: '16px'
    };

    const fontSizeVariant = fontSizeMap[xAxisFontSize] || fontSizeMap.sm;

	const renderGradients = () => (
		<defs>
			{colors.map((color, index) => (
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

	return (
		<ResponsiveContainer
			width="100%"
			height="100%"
            initialDimension={{ width: chartWidth, height: chartHeight }}
		>
			<AreaChart data={data} margin={{ left: 14, right: 14 }}>
				{showCartesianGrid && <CartesianGrid vertical={false} />}
				{showXAxis && (
					<XAxis
						dataKey={xAxisDataKey}
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={tickFormatter}
                        tick={{ fontSize: fontSizeVariant, fill: xAxisFontColor }}
					/>
				)}
				{showYAxis && <YAxis dataKey={yAxisDataKey} />}
				{showTooltip && <Tooltip />}
                {showLegend && <Legend content={<ChartLegendContent fontSizeVariant={fontSizeVariant} />} />}

				{variant === 'gradient' && renderGradients()}

				{dataKeys.map((key, index) => (
					<Area
						key={key}
						type="monotone"
						dataKey={key}
						stroke={colors[index].stroke}
						fill={
							variant === 'gradient'
								? `url(#fill${index})`
								: colors[index].fill
						}
						stackId="1"
					/>
				))}
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default AreaChartComponent;