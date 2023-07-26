import { Location } from "../../api/client/models/Location";

type Props = {
	locations: Location[];
};

export default function DummyLocationsList({ locations }: Props) {
	return (
		<>
			<h2>Locations:</h2>
			<ul>
				{locations.map((location) => (
					<li key={location.identifier}>{location.name?.de}</li>
				))}
			</ul>
		</>
	);
}
