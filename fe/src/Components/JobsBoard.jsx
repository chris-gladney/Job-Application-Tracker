import InfoBlock from "./InfoBlock";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import SearchJobs from "./SearchJobs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const testData = [
  { text: "Total Applications", number: 24, color: "#3d80c1" },
  { text: "Interviews", number: 5, color: "#35b3b2" },
  { text: "Offers", number: 2, color: "#f6953e" },
  { text: "Rejected", number: 8, color: "#ef5235" },
];

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
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
  datasets: [
    {
      label: "Jobs Applied per Month",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      backgroundColor: "#3d80c1",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

function JobsBoard() {
  return (
    <>
      {/* Banner */}
      <section className="main-page">
        <h2>Welcome Back!</h2>
        <div className="job-info">
          {testData.map((block, i) => {
            return (
              <InfoBlock
                key={i}
                text={block.text}
                number={block.number}
                color={block.color}
              />
            );
          })}
        </div>
        <div className="jobs-applied-stats">
          <div className="bar-chart-container">
            <Bar data={data} options={options} />
          </div>
          <SearchJobs />
        </div>
      </section>
    </>
  );
}

export default JobsBoard;
