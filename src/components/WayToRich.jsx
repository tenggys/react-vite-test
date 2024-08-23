export default function WayToTeach({ title, text }) {
    return (
      <li>
        <p>
          <strong>{title} </strong>
            {text}
        </p>
      </li>
    )
}