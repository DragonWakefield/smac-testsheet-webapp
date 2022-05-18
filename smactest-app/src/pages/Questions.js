import { useRank } from "../hooks/useRank"

export default function Questions() {
  const { rank } = useRank()
  return (
    <div>
      <h1>Questions</h1>
      <p>{rank}</p>
    </div>
  )
}
