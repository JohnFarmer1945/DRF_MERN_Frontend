import useFetch from "../customHooks/useFetch";

function FetchAPITest() {
  const { data, isPending, error } = useFetch("https://catfact.ninja/fact");

  return (
    <div className="container-fluid border rounded text-center p-2">
      {error && <div> {error}</div>}
      {isPending && <div> Loading content ... </div>}
      {data && <div> {data.fact}</div>}
    </div>
  );
}

export default FetchAPITest;
