

const UserInput = ({onChange, userInput}) => {
  return (
    <section id="user-input">
      <div clasName="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestement}
            onChange={(event) =>
              onChange("initialInvestement", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div clasName="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;