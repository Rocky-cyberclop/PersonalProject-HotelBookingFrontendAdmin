import style from './Dashboard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCoins, faUserPlus, faUsers, faClock, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Chart from 'react-apexcharts'
import { DataGrid } from '@mui/x-data-grid';

import xdlogo from '../../assets/images/logo-xd.svg';
import alantic from '../../assets/images/logo-atlassian.svg';
import fixplatform from '../../assets/images/logo-jira.svg';
import spotify from '../../assets/images/logo-spotify.svg';
import round from '../../assets/images/logo-slack.svg';
import invision from '../../assets/images/logo-invision.svg';

import team1 from '../../assets/images/team-1.jpeg'
import team2 from '../../assets/images/team-2.jpeg'
import team3 from '../../assets/images/team-3.jpeg'
import team4 from '../../assets/images/team-4.jpeg'

function Dashboard() {

    const columns = [
        {
            field: 'company',
            headerName: <div className={style.tableTitle}>COMPANIES</div>,
            width: 400,
            disableColumnMenu: true,
            renderCell: (params) => (
                <div className={style.cell}>
                    <img className={style.logo} src={params.row.company.logo} alt="" />
                    <div className={style.name}>{params.row.company.title}</div>
                </div>
            )
        },
        {
            field: 'member',
            headerName: <div className={style.tableTitle}>MEMBERS</div>,
            width: 300,
            disableColumnMenu: true,
            renderCell: (params) => (
                <div className={style.cell}>
                    <div className={style.members}>{
                        params.row.members.map((member) => (
                            <img src={member} alt="" className={style.item} />
                        ))
                    }</div>
                </div>
            )
        },
        {
            field: 'budget',
            headerName: <div className={style.tableTitle}>BUDGET</div>,
            width: 200,
            disableColumnMenu: true,
            renderCell: (params) => (
                <div className={style.cell}>
                    <div className={style.price}>{params.row.budget}</div>
                </div>
            )
        },
        {
            field: 'completion',
            headerName: <div className={style.tableTitle}>COMPLETION</div>,
            width: 200,
            disableColumnMenu: true,
            renderCell: (params) => (
                <div className={style.cell}>
                    <div className={style.completion}>
                        <div className={style.number}>{params.row.completion}%</div>
                        <div className={style.bar}>
                            <div 
                            className={`${style.progress} 
                            ${(params.row.completion === 100 && style.completed) || style.inProgress}`}
                            style={{width: `${params.row.completion}%`}}></div>
                        </div>
                    </div>
                </div>
            )
        },
    ]

    const rows = [
        { id: 1, company: { title: 'Material XD Version', logo: xdlogo }, members: [team1, team2, team3, team4], budget: '$14,000', completion: 60 },
        { id: 2, company: { title: 'Add Progress Track', logo: alantic }, members: [team2, team4], budget: '$3,000', completion: 10 },
        { id: 3, company: { title: 'Fix Platform Errors', logo: round }, members: [team1, team3], budget: 'Not set', completion: 100 },
        { id: 4, company: { title: 'Add the New Pricing Page', logo: spotify }, members: [team4, team3, team2, team1], budget: '$20,500', completion: 100 },
        { id: 5, company: { title: 'Launch our Mobile App', logo: fixplatform }, members: [team4], budget: '$500', completion: 25 },
        { id: 6, company: { title: 'Redesign New Online Shop', logo: invision }, members: [team1, team4], budget: '$2,000', completion: 40 },
    ]

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
        height: 220,
        series: [
            {
                name: "Views",
                data: [50, 20, 10, 22, 50, 10, 40],
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
                categories: ["M", "T", "W", "T", "F", "S", "S"],
            },
        },
    };

    const dailySalesChart = {
        type: "line",
        height: 220,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            ...chartsConfig,
            colors: ["#0288d1"],
            stroke: {
                lineCap: "round",
            },
            markers: {
                size: 5,
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        },
    };

    const completedTasksChart = {
        type: "line",
        height: 220,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            ...chartsConfig,
            colors: ["#388e3c"],
            stroke: {
                lineCap: "round",
            },
            markers: {
                size: 5,
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        },
        series: [
            {
                name: "Tasks",
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            },
        ],
    };


    return (
        <div className={style.container}>
            <div className={style.cards}>
                <div className={style.item}>
                    <div>
                        <div className={style.body}>
                            <FontAwesomeIcon icon={faCoins} className={style.icon} />
                            <div className={style.description}>
                                <div className={style.title}>Today's Money</div>
                                <div className={style.statistic}>$53k</div>
                            </div>
                        </div>
                        <div className={style.footer}>
                            +55% than last week
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <FontAwesomeIcon icon={faUsers} className={style.icon} />
                        <div className={style.description}>
                            <div className={style.title}>Today's Users</div>
                            <div className={style.statistic}>2,300</div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        +3% than last month
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <FontAwesomeIcon icon={faUserPlus} className={style.icon} />
                        <div className={style.description}>
                            <div className={style.title}>New Clients</div>
                            <div className={style.statistic}>3,462</div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        -2% than yesterday
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <FontAwesomeIcon icon={faChartSimple} className={style.icon} />
                        <div className={style.description}>
                            <div className={style.title}>Sales</div>
                            <div className={style.statistic}>$103,430</div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        $103,430
                    </div>
                </div>
            </div>
            <div className={style.charts}>
                <div className={style.item}>
                    <div className={style.body}>
                        <Chart {...websiteViewsChart} />
                    </div>
                    <div className={style.header}>
                        <div className={style.title}>Website View</div>
                        <div className={style.description}>Last Campaign Performance</div>
                    </div>
                    <div className={style.footer}><FontAwesomeIcon icon={faClock} /> campaign sent 2 days ago</div>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <Chart {...dailySalesChart} />
                    </div>
                    <div className={style.header}>
                        <div className={style.title}>Daily Sales</div>
                        <div className={style.description}>15% increase in today sales</div>
                    </div>
                    <div className={style.footer}><FontAwesomeIcon icon={faClock} />  updated 4 min ago</div>
                </div>
                <div className={style.item}>
                    <div className={style.body}>
                        <Chart {...completedTasksChart} />
                    </div>
                    <div className={style.header}>
                        <div className={style.title}>Completed Tasks</div>
                        <div className={style.description}>Last Campaign Performance</div>
                    </div>
                    <div className={style.footer}><FontAwesomeIcon icon={faClock} /> just updated</div>
                </div>
            </div>
            <div className={style.tableWrapper}>
                <div className={style.header}>
                    <div className={style.title}>
                        Projects
                    </div>
                    <div className={style.description}>
                        <FontAwesomeIcon icon={faCircleCheck} /> 30 done this month
                    </div>
                </div>
                <DataGrid
                    className={style.table}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                />
            </div>
            <div className={style.offset}>

            </div>
        </div>
    )
}

export default Dashboard;