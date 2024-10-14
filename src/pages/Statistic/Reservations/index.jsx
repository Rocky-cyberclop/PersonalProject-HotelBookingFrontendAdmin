import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import style from '../../Dashboard/Dashboard.module.scss'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ReservationStatistic = () => {
    const [condition, setCondition] = useState(
        {
            from: null,
            to: null,
        }
    )
    const [data, setData] = useState([{ label: '', value: 0 }])
    useEffect(() => {
        if (condition.from && condition.to) {
            setData([
                { label: "01-01-2002", value: 50 },
                { label: "01-01-2002", value: 40 },
                { label: "01-01-2002", value: 300 },
                { label: "01-01-2002", value: 320 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 350 },
                { label: "01-01-2002", value: 200 },
                { label: "01-01-2002", value: 230 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
                { label: "01-01-2002", value: 500 },
            ])
        }
    }, [condition.from, condition.to])
    const chartsConfig = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#37474f",
                    fontSize: "13px",
                    fontFamily: "inherit",
                    fontWeight: 300,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#37474f",
                    fontSize: "13px",
                    fontFamily: "inherit",
                    fontWeight: 300,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    };
    const websiteViewsChart = {
        type: "bar",
        height: 400,
        series: [
            {
                name: "Views",
                data: data.map(item => item.value),
            },
        ],
        options: {
            ...chartsConfig,
            colors: "#388e3c",
            plotOptions: {
                bar: {
                    columnWidth: "16%",
                    borderRadius: 5,
                },
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: data.map(item => item.label),
            },
        },
    };
    const handleDateStart = (e) => {
        if (condition.to && e > condition.to) {
            setCondition({ from: e, to: null })
        }
        else {
            setCondition(pre => ({ ...pre, from: e }))
        }
    }
    const handleDateEnd = (e) => {
        if (e < condition.from) {
            setCondition({ to: e, from: null })
        }
        else {
            setCondition(pre => ({ ...pre, to: e }))
        }
    }
    return (
        <div className={style.container}>
            <div className={style.statistic}>
                <div className={style.filter}>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <div className={style.filterLabel}>
                                Choose a range of date:
                            </div>
                            <DatePicker value={condition.from} label="Pick a date start" onChange={handleDateStart} />
                            <DatePicker value={condition.to} label="Pick a date end" onChange={handleDateEnd} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <Chart {...websiteViewsChart} />
                    </div>
                    <div className={style.header}>
                        <div className={style.title}>Profit statistic</div>
                        <div className={style.description}>15% increase based on range of time</div>
                    </div>
                    <div className={style.footer}><FontAwesomeIcon icon={faClock} />  updated 4 min ago</div>
                </div>
            </div>
        </div>
    )
}

export default ReservationStatistic