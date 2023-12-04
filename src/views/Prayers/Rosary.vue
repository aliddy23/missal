<template>
	<div class="mass">
		<section class="mass-header">
			<h1 class="text-uppercase text-deep-purple-lighten-1">
				THE HOLY PSALTER<br />
				OF THE BLESSED VIRGIN MARY
			</h1>
		</section>

		<v-container style="max-width: 900px" class="pt-0 mass-content">
			<v-divider class="mb-6"></v-divider>

			<section>
				<h3>THE SIGN OF THE CROSS</h3>

				<p class="mass-action">Kiss the Crucifix.</p>

				<table>
					<tr>
						<td>In nomine Patris, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> et Filii, et Spiritus Sancti. Amen.</td>
						<td>
							In the name of the Father, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and of the Son, and of the Holy
							Ghost. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>OREMUS</h3>

				<p class="mass-action">Typically said by the leader in a group, but optional in a private setting.</p>

				<table>
					<tr>
						<td>
							Déus, cújus Unigénitus per vítam, mórtem et resurrectiónem súam nóbis salútis ætérnæ præmia comparávit: concéde, quæsumus: ut hæc
							mystéria sacrasssimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promídunt, assequámur. Per eúndem
							Chrístum Dóminum nóstrum. Amen.
						</td>
						<td>
							O God, Whose only begoden Son, by His life, death, and resurrection has purchased for us the rewards of eternal life; grant, we beseech
							Thee, that meditating upon these mysteries of the most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain, and
							obtain what they promise, through the same Christ our Lord. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE CONFITEOR</h3>

				<p class="mass-action">Confess your sins to Almighty God.</p>

				<table>
					<tr>
						<td>
							Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis Petro et
							Paulo, omnibus Sanctis, et tibi, pater: quia peccavi nimis cogitatione, verbo et opere:
							<span class="mass-action">[Strike breast three times.]</span>
							mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joannem
							Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et te, Pater, orare pro me ad Dominum Deum nostrum. Amen.
						</td>
						<td>
							I confess to Almighty God, to blessed Mary ever Virgin, to blessed Michael the Archangel, to blessed John the Baptist, to the holy
							Apostles Peter and Paul, to all the Saints, and to thee, Father, that I have sinned exceedingly, in thought, word, and deed:
							<span class="mass-action">[Strike breast three times.]</span> through my fault, through my fault, through my most grievous fault.
							Therefore I beseech blessed Mary ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul,
							all the Saints, and thee, Father, to pray to the Lord our God for me. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE APOSTLES' CREED</h3>

				<table>
					<tr>
						<td>
							Credo in Deum, Patrem omnipotentem, Creatorem cæli et terræ. Et in Jesum Christum, Filium ejus unicum, Dominum nostrum: qui conceptus
							est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus: descendit ad inferos; tertia
							die resurrexit a mortuis; ascendit ad cælos; sedet ad dexteram Dei Patris omnipotentis: inde venturus est judicare vivos et mortuos.
							Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam
							æternam. Amen.
						</td>
						<td>
							I believe in God, the Father almighty, Creator of heaven and earth. And in Jesus Christ, His only Son, our Lord: Who was conceived by
							the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; the
							third day He rose again from the dead; He ascended into heaven, sitteth at the right hand of God, the Father almighty; from thence He
							shall come to judge the living and the dead. I believe in the Holy Ghost, the holy Catholic Church, the communion of saints, the
							forgiveness of sins, the resurrection of the body, and life everlasting. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE LORD'S PRAYER</h3>

				<p class="mass-action">Begin a decade with the Our Father.</p>

				<table>
					<tr>
						<td>
							Pater Noster, qui es in cælis: sanctificetur nomen tuum: adveniat regnum tuum: fiat voluntas tua, sicut in cælo, et in terræ. Panem
							nostrum quotidianum da nobis hodie: et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in
							tentationem: sed libera nos a malo. Amen.
						</td>
						<td>
							Our Father, Who art in heaven, hallowed be Thy Name; Thy Kingdom come; Thy will be done on earth as it is in heaven, Give us this day
							our daily bread; and forgive us our trespasses as we forgive those who trespass against us. And lead us not into temptation, but deliver
							us from evil. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE MYSTERIES OF THE ROSARY</h3>

				<p class="mass-action">Meditate on the relevant Mystery of the set of Mysteries for the day.</p>

				<v-row>
					<v-col cols="12" md="4">
						<h4 class="ma-0 pa-0">JOYFUL</h4>

						<p class="mx-2">Mondays, Thursdays, and Sundays from Advent until the start of Lent.</p>

						<h5 class="text-left" v-for="(decade, index) in mysteries.joyful">
							<i>{{ romanNumeral(index + 1) }}.</i> {{ decade.name }}
						</h5>
					</v-col>

					<v-col cols="12" md="4">
						<h4 class="ma-0 pa-0">SORROWFUL</h4>

						<p class="mx-2">Tuesdays, Fridays and Sundays during Lent.</p>

						<h5 class="text-left" v-for="(decade, index) in mysteries.joyful">
							<i>{{ romanNumeral(index + 1) }}.</i> {{ decade.name }}
						</h5>
					</v-col>

					<v-col cols="12" md="4">
						<h4 class="ma-0 pa-0">GLORIOUS</h4>

						<p class="mx-2">Wednesdays, Saturdays and Sunday’s from Easter to Advent</p>

						<h5 class="text-left" v-for="(decade, index) in mysteries.joyful">
							<i>{{ romanNumeral(index + 1) }}.</i> {{ decade.name }}
						</h5>
					</v-col>
				</v-row>
			</section>

			<section>
				<h3>THE ANGELIC SALUTATION</h3>

				<p class="mass-action">Pray the Hail Mary on small beads.</p>

				<table>
					<tr>
						<td>
							Ave Maria, gratia plena, Dóminus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Jesus. Sancta Maria, Mater Dei,
							ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.
						</td>
						<td>
							Hail, Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary,
							Mother of God, pray for us sinners, now and at the hour of our death. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>DOXOLOGICA MINOR</h3>

				<p class="mass-action">Pray the Glory be at the end of a decade.</p>

				<table>
					<tr>
						<td>Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.</td>
						<td>
							Glory be to the Father, and to the Son, and to the Holy Ghost. As it was in the beginning, is now, and ever shall be, world without end.
							Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE ORATIO FRATIMÆ</h3>

				<p class="mass-action">Followed by the Fatima prayer.</p>

				<table>
					<tr>
						<td>
							Oh mi Jesu, dimide nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praesertim illas quae maxime indigent
							misericordia tua. Amen.
						</td>
						<td>
							O My Jesus, forgive us our sins, save us from the fires of Hell and lead all souls to Heaven, especially those in most need of Thy
							mercy. Amen.
						</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE SALVE REGINA</h3>

				<p class="mass-action">Close with the Hail, Holy Queen.</p>

				<table>
					<tr>
						<td>
							Salve, Regina, mater misericordiae: vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus, gementes
							et flentes in hac lacrimarum valle. Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum
							fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria. Amen.
						</td>
						<td>
							Hail, Holy Queen, Mother of Mercy, Hail our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee
							do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious advocate, Thine eyes of mercy toward us,
							and aier this our exile show unto us the blessed Fruit of Thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Amen.
						</td>
					</tr>
				</table>
			</section>
		</v-container>
	</div>
</template>

<script setup lang="ts">
	import { type Ref, ref, watch, computed } from "vue";
	import { useRoute } from "vue-router";

	const route = useRoute();

	const mysteries = {
		joyful: [
			{
				name: "The Annunciation",
				desc: "The Archangel Gabriel announces to the Blessed Virgin Mary that she shall conceive and bear a Son by the power of the Holy Ghost.",
				passage: "Luke 1:31-32",
			},
			{
				name: "The Visitation",
				desc: "The Blessed Virgin Mary visits her cousin, Saint Elizabeth, who is pregnant with Saint John the Baptist.",
				passage: "Luke 1:42-45",
			},
			{
				name: "The Nativity",
				desc: "The Blessed Virgin Mary gives birth to the Son of God in a stable in Bethlehem.",
				passage: "Luke 2:6-7",
			},
			{
				name: "The Presentation",
				desc: "The Blessed Virgin Mary presents the Child Jesus in the Temple, where He is recognized by Simeon and Anna as the Messiah.",
				passage: "Luke 2:22-24",
			},
			{
				name: "The Finding in the Temple",
				desc: "The Blessed Virgin Mary and Saint Joseph find the Child Jesus in the Temple, discussing the Law with the teachers.",
				passage: "Luke 2:46-47",
			},
		],
	};

	function romanNumeral(input: number): string {
		if (input === 1) return "I";
		if (input === 2) return "II";
		if (input === 3) return "III";
		if (input === 4) return "IV";
		if (input === 5) return "V";
		return "";
	}

	watch(
		() => route.params,
		() => window.scrollTo({ top: 0, behavior: "smooth" })
	);
</script>
