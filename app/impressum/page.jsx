export default function Impressum() {
    return (
        <div className="container mx-auto px-4 py-20 mt-16 text-white">
            <h1 className="text-3xl font-bold mb-8">Impressum</h1>
            
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>Lucius Aeby</p>
                    <p>Musterstrasse 123</p>
                    <p>1234 Musterstadt</p>
                    <p>Schweiz</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                    <p>Telefon: +41 123 456 789</p>
                    <p>E-Mail: lucius.aeby@icloud.com</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>Lucius Aeby</p>
                    <p>Musterstrasse 123</p>
                    <p>1234 Musterstadt</p>
                    <p>Schweiz</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Haftungsausschluss</h2>
                    <p className="mb-4">Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
                    <p className="mb-4">Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
                    <p className="mb-4">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </section>
            </div>
        </div>
    );
}