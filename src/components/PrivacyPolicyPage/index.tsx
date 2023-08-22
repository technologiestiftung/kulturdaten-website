import { useTranslations } from "next-intl";
import { headerHeight, spacings } from "../../common/styleVariables";
import { HeaderSimple } from "../Header";
import Link, { LinkInternal } from "../Link";
import Page from "../Page";
import Reader from "../Reader";
import Spacer from "../Spacer";
import Text from "../Text";

export default function PrivacyPolicyPage() {
	const t = useTranslations("Privacy-Policy");
	return (
		<Page
			// TODO: Update/add more metadata before release.
			metadata={{
				title: t("meta-title"),
			}}
			header={<HeaderSimple />}
		>
			<Reader>
				<Spacer size={`calc(${headerHeight} + ${spacings.get(3)}px)`} />
				<Text type="h1">Datenschutzerklärung</Text>
				<Text type="h2">Wer wir sind</Text>
				<p>
					Die Adresse unserer Website ist: https://kulturdaten.berlin. Die Datenverarbeitung auf dieser Website erfolgt
					durch den Websitebetreiber. Dessen Kontaktdaten kannst du dem{" "}
					<LinkInternal href="/imprint">Impressum</LinkInternal> dieser Website entnehmen.
				</p>
				<p>
					Ausführliche Informationen zum Datenschutz auf Angeboten der Technologiestiftung Berlin findest du hier:{" "}
					<Link rel="noreferrer noopener" href="https://www.technologiestiftung-berlin.de/datenschutz" target="_blank">
						https://www.technologiestiftung-berlin.de/datenschutz
					</Link>
				</p>
				<Text type="h3">Cookies & das Webanalyse-Tool Matomo</Text>
				<p>
					Cookies sind Daten, die auf deinem Datenträger beim Besuch von Websites gespeichert werden und im Austausch
					mit unserer Website bestimmte Daten und Einstellungen speichern.
				</p>
				<p>
					Diese Seite wird nur mit technisch notwendigen Cookies betrieben, technisch nicht-notwendige Cookies kommen
					nicht zum Einsatz. Wir verwenden das Webanalysetool Matomo (eine Anwendung der Firma Innocraft (InnoCraft Ltd,
					150 Willis St, 6011 Wellington, New Zealand)) für die statistische Auswertung der Webseite.
				</p>
				<p>
					Das Tool kann in anonymisierter Form Aktivitäten auf unserer Website nachverfolgen und uns basierend darauf
					eine Auswertung erstellen. Wir können demnach keine Rückschlüsse auf die Identität der jeweiligen Nutzerin/des
					jeweiligen Nutzers vornehmen. Zweck der Erhebung ist es, innerhalb der Webpräsenz mögliche Fehler zu erkennen
					und zu lösen sowie den Inhalt den Bedürfnissen unserer Besucher:innen anzupassen und zu optimieren. Nur die
					Technologiestiftung Berlin hat Zugriff auf diese Daten. Eine Weitergabe an Dritte erfolgt nicht. Falls du die
					Browser-Einstellung &quot;Do not Track&quot; aktivierst hast, erheben wir keine Webseiten-Aktivitäten mittels
					Matomo.
				</p>

				<Text type="h3">Ansprechpartner</Text>
				<p>
					Um von deinen Rechten Gebrauch zu machen und für andere Nachfragen, kontaktiere bei Nachfragen den
					Datenschutzbeauftragten der Technologiestiftung Berlin unter{" "}
					<Link href="mailto:datenschutz@ts.berlin" rel="nofollow">
						datenschutz@ts.berlin
					</Link>
				</p>
				<Spacer size={50} />
			</Reader>
		</Page>
	);
}
