export default function Destination(props) {
  return (
    <div className="destination-block">
      <div>
        <img src={props.destimg} />
      </div>
      <div>
        <span class="destination-country">JAPAN</span>
        <h2 class="destination-title">{props.title}</h2>
        <div className="destination-date">12 Jan, 2021 - 24 Jan, 2021</div>
        <div className="destination-desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </div>
      </div>
    </div>
  );
}
