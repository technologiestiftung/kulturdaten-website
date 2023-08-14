import { useTranslations } from "next-intl";
import { LinkInternal } from "../Link";
import Page from "../Page";
import Reader from "../Reader";
import Spacer from "../Spacer";
import Text from "../Text";

export default function ImprintPage() {
	const t = useTranslations("Imprint");
	return (
		<Page
			// TODO: Update/add more metadata before release.
			metadata={{
				title: t("meta-title"),
			}}
		>
			<Reader>
				<Spacer size={20} />
				<Text type="h1">Impressum</Text>
				<Text type="h2">Angaben zur Technologiestiftung Berlin</Text>
				<p>
					Technologiestiftung Berlin
					<br />
					Grunewaldstraße 61-62
					<br />
					10825 Berlin
				</p>
				<p>
					Telefon +49 30 209 69 99 0<br />
					E-Mail: info(at)ts.berlin
					<br />
					Web:{" "}
					<a href="https://www.technologiestiftung-berlin.de/" target="_blank" rel="noreferrer noopener">
						www.technologiestiftung-berlin.de
					</a>
				</p>
				<p>
					Stiftungsverzeichnis Berlin: AZ 3416/464 B3
					<br />
					USt-Id-Nr.: DE 187 459 128
				</p>
				<p>
					Die Technologiestiftung Berlin ist eine rechtsfähige und gemeinnützige Stiftung bürgerlichen Rechts. Sie
					unterliegt nach dem Berliner Stiftungsgesetz in der Fassung vom 11. Dezember 1997 (GVBl. S. 674) der
					Staatsaufsicht, die von der Senatsverwaltung für Justiz, Salzburger Str.21-25, 10825 Berlin, geführt wird.
				</p>
				<Text type="h2">Vertretungsberechtigter Vorstand</Text>
				<p>
					Nicolas Zimmer (Vorsitz)
					<br />
					Steffen Döring
					<br />
					Prof. Dr. rer. nat. Martina Schraudner
				</p>
				<Text type="h2">Inhaltlich Verantwortliche:r gemäß §5 TMG</Text>
				<p>Simon Scholler (Technologiestiftung Berlin)</p>
				<Text type="h2">Technische Umsetzung</Text>
				<p>Technologiestiftung Berlin</p>
				<Text type="h2">Haftungsausschluss</Text>
				<p>
					Es wird von uns keine Garantie dafür übernommen, dass die auf dieser Website bereitgestellten Informationen
					vollständig, richtig und in jedem Fall aktuell sind.
				</p>
				<p>
					Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Wir
					haben keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung der verlinkten Seiten. Wir distanzieren
					uns hiermit ausdrücklich von allen inhaltlichen Änderungen, die nach der Linksetzung auf den verlinkten Seiten
					vorgenommen werden. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
				</p>
				<p>
					Wir behalten uns das Recht vor, ohne vorherige Ankündigung Änderungen oder Ergänzungen der bereitgestellten
					Informationen vorzunehmen.
				</p>
				<p>
					Wir sind bestrebt, in allen Publikationen geltende Urheberrechte zu beachten. Sollte es trotzdem zu einer
					Urheberrechtsverletzung kommen, werden wir das entsprechende Objekt nach Benachrichtigung aus seiner
					Publikation entfernen bzw. mit dem Urheberrecht kenntlich machen.
				</p>
				<p>
					Alle auf den Webseiten genannten und gegebenenfalls durch Dritte geschützte Marken- und Warenzeichen
					unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
					jeweiligen eingetragenen Eigentümer.
				</p>
				<p>
					Dieser Haftungshinweis ist als Teil des Internetangebotes der Technologiestiftung Berlin zu betrachten. Sofern
					Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht
					vollständig entsprechen sollten, bleiben die übrigen Teile des Dokuments in ihrem Inhalt und ihrer Gültigkeit
					hiervon unberührt.
				</p>
				<p>
					Angaben zum Datenschutz finden sich in unserer{" "}
					<LinkInternal href="/privacy-policy">Datenschutzerklärung</LinkInternal>.
				</p>
				<Spacer size={50} />
			</Reader>
		</Page>
	);
}
