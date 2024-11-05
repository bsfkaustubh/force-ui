// import React from 'react';
// import { cn } from '@/utilities/functions';

// const ChartTooltipContent = React.forwardRef(
//     (
//         {
//             active,
//             payload,
//             className,
//             indicator = 'dot', //dot, line, dashed
//             hideLabel = false,
//             hideIndicator = false,
//             label,
//             labelFormatter,
//             labelClassName,
//             formatter,
//             color, // Fallback color from PieChart
//             nameKey = 'name',
//             labelKey,
//         },
//         ref
//     ) => {
//         const tooltipLabel = React.useMemo(() => {
//             if (hideLabel || !payload?.length) return null;

//             const [item] = payload;
//             const value = labelFormatter ? labelFormatter(label) : item[labelKey] || label;

//             return value ? <div className={cn('font-medium', labelClassName)}>{value}</div> : null;
//         }, [label, labelFormatter, payload, hideLabel, labelClassName, labelKey]);

//         if (!active || !payload?.length) return null;

//         const isSinglePayload = payload.length === 1 && indicator !== 'dot';

//         return (
//             <div
//                 ref={ref}
//                 className={cn(
//                     'grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl',
//                     className
//                 )}
//             >
//                 {!isSinglePayload ? tooltipLabel : null}
//                 <div className="grid gap-1.5">
//                     {payload.map((item, index) => {
//                         const indicatorColor = item.color || color || '#000';
//                         console.log("Payload item color:", item.color);


//                         return (
//                             <div
//                                 key={item.dataKey || index}
//                                 className={cn(
//                                     'flex w-full items-stretch gap-2',
//                                     indicator === 'dot' && 'items-center'
//                                 )}
//                             >
//                                 {!hideIndicator && (
//                                     <div
//                                         className={cn({
//                                             'h-2.5 w-2.5 ': indicator === 'dot',
//                                             'w-1 h-full': indicator === 'line',
//                                             'w-0 border-[0.5px] border-dashed': indicator === 'dashed',
//                                         })}
//                                         style={{
//                                             backgroundColor: indicator === 'dot' || indicator === 'line' ? indicatorColor : undefined,
//                                             borderColor: indicator === 'dashed' ? indicatorColor : undefined,
//                                         }}
//                                     />
//                                 )}
//                                 <div className="flex-1 flex justify-between items-center">
//                                     <span>{item[nameKey] || item.dataKey}</span>
//                                     <span className="font-mono font-medium">{formatter ? formatter(item.value) : item.value}</span>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         );
//     }
// );

// ChartTooltipContent.displayName = 'ChartTooltipContent';

// export default ChartTooltipContent;




import React from 'react';
import { cn } from '@/utilities/functions';

const ChartTooltipContent = React.forwardRef(
    (
        {
            active,
            payload,
            className,
            indicator = 'dot', //dot, line, dashed
            hideLabel = false,
            hideIndicator = false,
            label,
            labelFormatter,
            labelClassName,
            formatter,
            color, // Fallback color from PieChart
            nameKey = 'name',
            labelKey,
        },
        ref
    ) => {
        const tooltipLabel = React.useMemo(() => {
            if (hideLabel || !payload?.length) return null;

            const [item] = payload;
            const value = labelFormatter ? labelFormatter(label) : item[labelKey] || label;

            return value ? <div className={cn('font-medium', labelClassName)}>{value}</div> : null;
        }, [label, labelFormatter, payload, hideLabel, labelClassName, labelKey]);

        if (!active || !payload?.length) return null;

        const isSinglePayload = payload.length === 1 && indicator !== 'dot';

        return (
            <div
                ref={ref}
                className={cn(
                    'grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl',
                    className
                )}
            >
                {!isSinglePayload ? tooltipLabel : null}
                <div className="grid gap-1.5">
                    {payload.map((item, index) => {
                        const indicatorColor = item.color || item.payload?.fill || color || '#000';

                        return (
                            <div
                                key={item.dataKey || index}
                                className={cn(
                                    'flex w-full items-stretch gap-2',
                                    indicator === 'dot' && 'items-center'
                                )}
                            >
                                {!hideIndicator && (
                                    <div
                                        className={cn({
                                            'h-2.5 w-2.5 ': indicator === 'dot',
                                            'w-1 h-full': indicator === 'line',
                                            'w-0 border-[0.5px] border-dashed': indicator === 'dashed',
                                        })}
                                        style={{
                                            backgroundColor: indicator === 'dot' || indicator === 'line' ? indicatorColor : undefined,
                                            borderColor: indicator === 'dashed' ? indicatorColor : undefined,
                                        }}
                                    />
                                )}
                                <div className="flex-1 flex justify-between items-center">
                                    <span>{item[nameKey] || item.dataKey}</span>
                                    <span className="font-mono font-medium">{formatter ? formatter(item.value) : item.value}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
);

ChartTooltipContent.displayName = 'ChartTooltipContent';

export default ChartTooltipContent;


