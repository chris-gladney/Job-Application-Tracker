import InfoBlock from "./InfoBlock";

const testData = [
  { text: "Total Applications", number: 24, color: "#ADD8E6" },
  { text: "Interviews", number: 5, color: "#00ffff" },
  { text: "Offers", number: 2, color: "#f19113" },
  { text: "Rejected", number: 8, color: "#fc2424" },
];

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
      </section>
    </>
  );
}

export default JobsBoard;
