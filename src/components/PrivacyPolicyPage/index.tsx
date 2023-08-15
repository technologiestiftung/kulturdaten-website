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
					Du hast die Möglichkeit, dem Setzen von Cookies über die jeweiligen Browser-Einstellungen oder mit Hilfe
					anderer Erweiterungen wie Ghostery oder uBlock generell zu widersprechen bzw. diese einzuschränken. Welche
					Erweiterungen du mit deinem Internetbrowser nutzen kannst, findest du auf den jeweiligen Seiten der
					Herstellerfirmen.
				</p>
				<p>
					Du kannst bei der erstmaligen Nutzung unserer Online-Dienste eine Entscheidung treffen, ob du der
					Technologiestiftung Berlin erlaubst, Cookies zur Verbesserung des Online-Angebots zu setzen oder nicht.
				</p>
				<p>
					Wir nutzen Cookies für das Webanalysetool Matomo und benutzen dieses ausschließlich für die statistische
					Auswertung der Webseite und erheben nur pseudonymisierte Daten.
				</p>
				<p>Dies ist eine Anwendung der Firma Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, New Zealand).</p>
				<p>
					Das Tool kann mit Hilfe von Cookies Aktivitäten auf unserer Website nachverfolgen und uns eine Auswertung
					erstellen. Folgende Informationen sind dadurch für uns auswertbar:
				</p>
				<ul>
					<li>
						Aktionen: Seitenbesuche, Linkklicks, Downloads, Eingangs- und Ausgangsseite sowie der jeweilige Zeitpunkt
						der Aktion
					</li>
					<li>
						Informationen über Benutzergeräte und Einstellungen: Hersteller/Marke, Modell/Geräteversion, Gerätetyp,
						Bildschirmauflösung, Spracheinstellung des Browsers
					</li>
					<li>Informationen über den Standort: Land des Zugriffs</li>
					<li>
						Matomo verarbeitet Daten pseudonymisiert. Die Daten werden von Matomo anonymisiert, bevor eine Anzeige für
						uns erfolgt. Wir können demnach keine Rückschlüsse auf die Identität der jeweiligen Nutzerin/des jeweiligen
						Nutzers vornehmen.
					</li>
				</ul>
				<p>
					Zweck der Erhebung ist es, innerhalb der Webpräsenz mögliche Fehler zu erkennen und zu lösen sowie den Inhalt
					den Bedürfnissen unserer Besucher*innen anzupassen und zu optimieren. Diese Interessen sind nach Art. 6. Abs 1
					S.1. lit f DSGVO berechtigt. Nur die Technologiestiftung Berlin hat Zugriff auf diese Daten. Eine Weitergabe
					an Dritte erfolgt nicht.
				</p>
				<p>
					Neben den oben aufgeführten Möglichkeiten, Cookies über die Browsereinstellungen zu verweigern, kannst du auch
					direkt beim Webanalysetool eine Opt-Out-Möglichkeit wählen:
				</p>
				<p>
					<iframe
						title="Piwik-Embed"
						style={{
							border: "0",
							width: "1000px",
							height: "200px",
						}}
						src="https://piwik.technologiestiftung-berlin.de/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=&fontColor=&fontSize=14pt&fontFamily=Arial"
					/>
				</p>
				<p>Klicke auf den unteren Button, um den Inhalt von piwik.technologiestiftung-berlin.de zu laden.</p>
				<p>
					Matamo ist eine freie Open-Source-Software und setzt hohe Standards, um Datenmissbrauch zu vermeiden. Mehr
					Informationen finden sich <Link href="https://matomo.org/gdpr-analytics/">hier</Link>.
				</p>
				<Text type="h3">Welche Rechte du an deinen Daten hast</Text>
				<p>
					Du kannst die Löschung, Berichtigung oder Einschränkung aller personenbezogenen Daten, die wir von dir
					gespeichert haben, anfordern. Dies umfasst nicht die Daten, die wir aufgrund administrativer, rechtlicher oder
					sicherheitsrelevanter Notwendigkeiten aufbewahren müssen.
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
