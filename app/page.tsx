export default function Home() {
  return (
    <main>
      <h1>Follow-Up App</h1>
      <p>Never Forget a Follow-Up</p>

    <form>
      <label htmlFor="firstName">First Name</label>
      <input 
          id="firstName"
          name="firstName"
          type="text"
      />
      <label htmlFor="LastName">Last Name</label>
      <input 
          id="lastName"
          name="lastName"
          type="text"
      />
      <label htmlFor="FollowUpDate">Follow-Up Date</label>
      <input 
          id="followUpDate"
          name="followUpDate"
          type="date"
      />
      <label htmlFor="Amount">Amount</label>
      <input
        id="amount"
        name="amount"
        type="number"
        step="0.01"
      />
      <label htmlFor="Notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        rows={4}
      />
      <button type="submit">Add Follow-Up</button>
      </form>

    </main>
  );
}