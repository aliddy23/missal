<template>
	<div class="mass">
		<section class="mass-header">
			<h1 class="text-uppercase">THE MOST NECESSARY PRAYERS</h1>
			<h2 class="font-italic">Compiled from the <router-link to="/missal">Missale Romanum</router-link></h2>
		</section>

		<v-container style="max-width: 900px" class="pt-0 mass-content">
			<v-divider class="mb-6"></v-divider>

			<section>
				<h3>THE SIGN OF THE CROSS</h3>

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
				<h3>THE LORD'S PRAYER</h3>

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
				<h3>THE ANGELIC SALUTATION</h3>

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
				<h3>THE PSALTER OF MARY</h3>

				<p>
					<router-link to="/prayers/rosary">Pray the Psalter of the Blessed Virgin Mary.</router-link>
				</p>
			</section>

			<section>
				<h3>THE SALVE REGINA</h3>

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

			<section>
				<h3>THE NICENE CREED</h3>

				<table>
					<tr>
						<td>
							Credo in unum Deum, Patrem omnipotentem, factorem cæli et terræ, visibilium omnium et invisibilium. Et in unum Dominum Jesum Christum,
							Filium Dei unigenitum: et ex Patre natum ante omnia sǽcula, Deum de Deo, lumen de lumine, Deum verum de Deo vero. Genitum, non factum,
							consubstantialem Patri: per quem omnia facta sunt. Qui propter nos homines, et propter nostram salutem descendit de cælis.
						</td>
						<td>
							I believe in one God, the Father almighty, maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus
							Christ, the only-begotten Son of God. Born of the Father before all ages. God of God, Light of Light, true God of true God. Begotten,
							not made: of one substance with the Father; by Whom all things were made. Who for us men, and for our salvation came down from heaven.
						</td>
					</tr>
				</table>

				<p class="mass-action">Genuflect.</p>

				<table>
					<tr class="text-center font-weight-bold">
						<td>ET INCARNATUS EST DE SPIRITU SANCTO EX MARIA VIRGINE: ET HOMO FACTUS EST.</td>
						<td>AND BECAME INCARNATE BY THE HOLY GHOST OF THE VIRGIN MARY: AND WAS MADE MAN.</td>
					</tr>
				</table>

				<p class="mass-action">Stand.</p>

				<table>
					<tr>
						<td>
							Crucifixus etiam pro nobis: sub Pontio Pilato passus et sepultus est. Et resurrexit tertia die, secundum Scripturas. Et ascendit in
							cælum: sedet ad dexteram Patris. Et iterum venturus est cum gloria judicare vivos et mortuos: cujus regni non erit finis. Et in Spiritum
							Sanctum, Dominum et vivificantem: qui ex Patre, Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur: qui locutus
							est per Prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et exspecto
							resurrectionem mortuorum.
							<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Et vitam venturi sæculi. Amen.
						</td>
						<td>
							He was also crucified for us, suffered under Pontius Pilate, and was buried. And on the third day He rose again according to the
							Scriptures. He ascended into heaven and sitteth at the right hand of the Father. He will come again in glory to judge the living and the
							dead and His kingdom will have no end. And in the Holy Ghost, the Lord and Giver of life: Who proceedeth from the Father and the Son.
							Who together with the Father and the Son is adored and glorified; and Who spoke through the Prophets. And One, Holy, Catholic and
							Apostolic Church. I confess one baptism for the forgiveness of sins. And I await the resurrection of the dead
							<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and the life of the world to come. Amen.
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
				<h3>THE CONFITEOR</h3>

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
				<h3>DOXOLOGICA MINOR</h3>

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
				<h3>THE BLESSING BEFORE A MEAL</h3>

				<table>
					<tr>
						<td>Benedic, Dómine, nos et hæc tua dona quæ de tua largitáte sumus sumptúri. Per Christum Dóminum nostrum. Amen.</td>
						<td>Bless us, O Lord, and these Thy gifts, which we are going to reeive from Thy bounty, Through Christ out Lord. Amen.</td>
					</tr>

					<tr>
						<td>Kyrie, eléison.</td>
						<td>Lord, have mercy on us.</td>
					</tr>

					<tr>
						<td>Christe, eléison.</td>
						<td>Christ, have mercy on us.</td>
					</tr>

					<tr>
						<td>Kyrie, eléison.</td>
						<td>Lord, have mercy on us.</td>
					</tr>

					<tr class="font-italic">
						<td>Pater noster... Ave Maria...</td>
						<td>Our Father... Hail Mary...</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE GRACE AFTER A MEAL</h3>

				<table>
					<tr>
						<td>Gartias ágimus tibi, omnípotens Deus, pro univérsis beneficiis tuis, qui vivis et regnas in sǽcula sæculórum. Amen.</td>
						<td>We give Thee thanks, almighty God, for all Thy benefits, Who livest and reignest, world without end. Amen.</td>
					</tr>

					<tr>
						<td>Kyrie, eléison.</td>
						<td>Lord, have mercy on us.</td>
					</tr>

					<tr>
						<td>Christe, eléison.</td>
						<td>Christ, have mercy on us.</td>
					</tr>

					<tr>
						<td>Kyrie, eléison.</td>
						<td>Lord, have mercy on us.</td>
					</tr>

					<tr class="font-italic">
						<td>Pater noster... Ave Maria...</td>
						<td>Our Father... Hail Mary...</td>
					</tr>
				</table>
			</section>

			<section>
				<h3>THE ORATIO FRATIMÆ</h3>

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
				<h3>THE PRAYER TO THE GUARDIAN ANGEL</h3>

				<table>
					<tr>
						<td>
							Angel of God, my Guardian dear, to whom His love commits me here, ever this day be at my side, to light and guard, to rule and guide.
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

	watch(
		() => route.params,
		() => window.scrollTo({ top: 0, behavior: "smooth" })
	);
</script>
