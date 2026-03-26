import InfoBlock from "./InfoBlock";

const testData = [
  { text: "Total Applications", number: 24, color: "#3d80c1" },
  { text: "Interviews", number: 5, color: "#35b3b2" },
  { text: "Offers", number: 2, color: "#f6953e" },
  { text: "Rejected", number: 8, color: "#ef5235" },
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
