/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import style from '../../Dashboard/Dashboard.module.scss'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';
import axios from 'axios';
import dayjs from 'dayjs';

const ReservationStatistic = () => {
    const [condition, setCondition] = useState(
        {
            from: null,
            to: null,
        }
    )
    const [data, setData] = useState([{ label: '', value: 0 }])
    const token = localStorage.getItem('admin')
    useEffect(() => {
        if (condition.from && condition.to) {
            const fetch = async () => {
                try {
                    const response = await axios.post(
                        `http://localhost:8080/api/reservation/statistic/reservation`,
                        {
                            from: condition.from,
                            to: condition.to,
                            page: 1,
                            szie: 1
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    );
                    if (response.data !== null) {
                        setData(
                            response.data.sort((a, b) =>
                                new Date(a.label) - new Date(b.label)));
                    }
                } catch (error) {
                    console.log(error);
                    toast.error('Could not fetch data! Something went wrong!');
                }
            };
            fetch();
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
        if (condition.to && dayjs(e).format('DD/MM/YYYY') > condition.to) {
            setCondition({ from: dayjs(e).format('DD/MM/YYYY'), to: null })
        }
        else {
            setCondition(pre => ({ ...pre, from: dayjs(e).format('DD/MM/YYYY') }))
        }
    }
    const handleDateEnd = (e) => {
        if (dayjs(e).format('DD/MM/YYYY') < condition.from) {
            setCondition({ to: dayjs(e).format('DD/MM/YYYY'), from: null })
        }
        else {
            setCondition(pre => ({ ...pre, to: dayjs(e).format('DD/MM/YYYY') }))
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
                            <DatePicker label="Pick a date start" onChange={handleDateStart} />
                            <DatePicker label="Pick a date end" onChange={handleDateEnd} />
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