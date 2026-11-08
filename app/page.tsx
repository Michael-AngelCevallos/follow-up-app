export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <h1>Follow-Up App</h1>
      <p>Never Forget a Follow-Up</p>

    <form className= "flex max-w-md flex-col gap-4">
      <label htmlFor="firstName">First Name</label>
      <input 
          id="firstName"
          name="firstName"
          type="text"
          className="rounded-md border border-gray-300 bg-white p-2"
      />
      <label htmlFor="LastName">Last Name</label>
      <input 
          id="lastName"
          name="lastName"
          type="text"
          className="rounded-md border border-gray-300 bg-white p-2"
      />
      <label htmlFor="FollowUpDate">Follow-Up Date</label>
      <input 
          id="followUpDate"
          name="followUpDate"
          type="date"
          className="rounded-md border border-gray-300 bg-white p-2"
      />
      <label htmlFor="Amount">Amount</label>
      <input
        id="amount"
        name="amount"
        type="number"
        step="0.01"
        className="rounded-md border border-gray-300 bg-white p-2"
      />
      <label htmlFor="Notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        rows={4}
        className="rounded-md border border-gray-300 bg-white p-2"
      />
      <button 
        type="submit"
        className="rounded-md bg-blue-600 p-2 font-semibold text-white hover:bg-blue-700"

        >
          Add Follow-Up
        </button>
      </form>

    </main>
  );
}