import React, { useState } from "react";
import "./MainData.css";

const FullStudy = () => {
  const [minRank, setMinRank] = useState(1);
  const [maxRank, setMaxRank] = useState(5);
  const [condition, setCondition] = useState("heart+attack");
  const [result, setResult] = useState("none");
  const [loading, setLoading] = useState(false);

  const fullStudyUrl = `https://clinicaltrials.gov/api/query/full_studies?expr=${condition}&min_rnk=${minRank}&max_rnk=${maxRank}&fmt=json`;

  const fetchData = () => {
    setLoading(true);
    fetch(fullStudyUrl)
      .then(res => res.json())
      .then(res2 => setResult(res2.FullStudiesResponse.FullStudies))
      .then(() => {
        setLoading(false);
      })
      .catch(err => console.log("error: ", err));

    console.log(result);
  };

  return (
    <div className="bodyWrapper">
      <h2>Full studies</h2>
      <p>Returns all content for a small set of study records.</p>
      <form>
        <label>
          Start at rank
          <input
            className="textField"
            type="minRank"
            name="minRank"
            value={minRank}
            onChange={e => setMinRank(e.target.value)}
          />
        </label>
        <br />
        <label>
          End at rank
          <input
            type="maxRank"
            name="maxRank"
            value={maxRank}
            onChange={e => setMaxRank(e.target.value)}
          />
        </label>
        <br />
        <label>
          Condition
          <input
            type="condition"
            name="condition"
            value={condition.replace("+", " ")}
            onChange={e => setCondition(e.target.value.replace(" ", "+"))}
          />
        </label>
      </form>
      <button
        className="fetchBtn"
        onClick={() => {
          fetchData();
        }}
      >
        fetch
      </button>
      {loading && <p>Loading...</p>}
      {result != "none" && (
        <React.Fragment>
          <p>Click a row to console.log all info about that study</p>
          <table id="studies">
            <thead>
              <tr>
                <td>Rank</td>
                <td>Study</td>
              </tr>
            </thead>
            <tbody>
              {result.map(study => {
                return (
                  <tr
                    key={
                      study.Study.ProtocolSection.IdentificationModule
                        .BriefTitle
                    }
                    onClick={() => {
                      console.log(study);
                    }}
                  >
                    <td>{study.Rank}</td>
                    <td>
                      {
                        study.Study.ProtocolSection.IdentificationModule
                          .BriefTitle
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default FullStudy;
