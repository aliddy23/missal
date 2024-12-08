<template>
	<div class="mass">
		<section class="mass-cover">
			<img src="@/assets/keys.png" style="width: 256px; margin: auto; margin-top: 200px" />
			<h1 class="mt-6">THE HOLY MASS</h1>
			<h2 v-html="mass.name" class="text-uppercase mt-2" :class="getColor()"></h2>
			<p class="mt-2">Sunday, December 8th, 2024</p>
		</section>

		<div class="mass-break"></div>

		<section class="mass-cover" style="margin-top: 200px">
			<h4 class="font-italic mb-2">Compiled from the</h4>
			<h1 style="color: #ef5350">MISSALE ROMANUM</h1>
			<h3 style="color: #ef5350" class="mt-3">EX DECRETO SACROSANCTI<br />CONCILII TRIDENTINI RESTITUTUM SUMMORUM<br />PONTIFICUM CURA RECOGNITUM</h3>
			<h3 style="color: #ef5350" class="mb-n4 mt-1 font-italic font-weight-bold">THE ROMAN MISSAL</h3>
			<h4 style="color: #ef5350" class="font-italic">RESTORED BY THE DECREE OF<br />THE INVIOLABLE COUNCIL OF TRENT<br />AND REVISED BY THE CARE OF THE SUPREME PONTIFF</h4>
			<h4 class="font-italic mt-7">Latin-English Ordinary and Propers <br />of the Mass of the Roman Rite, 1962</h4>
		</section>

		<div class="mass-break"></div>

		<section class="mass-header">
			<h1 class="text-uppercase" :class="getColor()" v-html="mass.name"></h1>
			<p class="mt-2">Sunday, December 8th, 2024</p>
			<p class="mb-n10">{{ getClass() }}</p>
		</section>

		<v-container style="max-width: 900px" class="pt-0 mass-content">
			<v-divider class="mb-6 d-print-none"></v-divider>

			<Asperges :vidiaquam="vidiaquam" />

			<v-divider class="mb-6 mt-4"></v-divider>

			<h3>THE MASS OF THE CATECHUMENS</h3>

			<p class="mass-note">
				The choir sings the Introit to begin the Mass. Meanwhile the priest and ministers recite the preparatory prayers at the foot at the altar.
			</p>

			<section>
				<h4>THE PREPARATORY PRAYERS</h4>

				<p class="mass-action">Kneel.</p>

				<p class="mass-note">
					The Celebrant, after bowing down at the foot of the altar, signs himself with the sign of the cross, saying in a clear voice:
				</p>

				<table>
					<tbody>
						<tr>
							<td>In nomine Patris, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> et Filii, et Spiritus Sancti. Amen.</td>
							<td>
								In the name of the Father, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and of the Son, and of the Holy
								Ghost. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Then, with his hands joined before his breast, he begins the Antiphon:</p>

				<table>
					<tbody>
						<tr>
							<td><i>ANT.</i> Introibo ad altare Dei.</td>
							<td><i>ANT.</i> I will go in unto the Altar of God.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Servers respond:</p>

				<table>
					<tbody>
						<tr>
							<td><i>R.</i> Ad Deum qui lætificat juventutem meam.</td>
							<td><i>R.</i> To God, Who giveth joy to my youth.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>PSALM 42</h4>
				<h5>Judica me</h5>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Judica me, Deus, et discerne causam meam de gente non sancta; ab homine iniquo et doloso erue me.</td>
							<td>
								<i>V.</i> Judge me, O God, and distinguish my cause from the nation that is not holy: deliver me from the unjust and deceitful man.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis in cedo, dum affligit me inimicus?</td>
							<td><i>R.</i> For Thou, O God, art my strength: why hast Thou cast me off? and why do I go sorrowful whilst the enemy afflicteth me?</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt et adduxerunt in montem sanctum tuum, et in tabernacula tua.</td>
							<td><i>V.</i> Send forth Thy light and Thy truth: they have led me, and brought me unto Thy holy hill, and into Thy tabernacles.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et introibo ad altare Dei: ad Deum qui lætificat juventutem meam.</td>
							<td><i>R.</i> And I will go in unto the Altar of God: unto God, Who giveth joy to my youth.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Confitebor tibi in cithara, Deus, Deus meus: quare tristis es, anima mea, et quare conturbas me?</td>
							<td><i>V.</i> I will praise Thee upon the harp, O God, my God: why art thou sad, O my soul? and why dost thou disquiet me?</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus.</td>
							<td><i>R.</i> Hope thou in God, for I will yet praise Him: Who is the salvation of my counte nance, and my God.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Gloria Patri, et Filio, et Spiritui Sancto.</td>
							<td><i>V.</i> Glory be to the Father, and to the Son, and to the Holy Ghost.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Sicut erat in principio, et nunc, et semper, et in sǽcula sæculórum. Amen.</td>
							<td><i>R.</i> As it was in the beginning is now, and ever shall be, world without end. Amen.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Introibo ad altare Dei.</td>
							<td><i>V.</i> I will go in unto the Altar of God.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Ad Deum qui lætificat juventutem meam.</td>
							<td><i>R.</i> To God, Who giveth joy to my youth.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Adjutorium nostrum <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> in nomine Domini.</td>
							<td><i>V.</i> Our <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> help is in the Name of the Lord.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Qui fecit cælum et terram.</td>
							<td><i>R.</i> Who hath made heaven and earth.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE CONFITEOR</h4>
				<p class="mass-note">Joining his hands and bowing deeply, the Celebrant makes the following confession:</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>V.</i> Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis
								Petro et Paulo, omnibus Sanctis, et tibi, pater: quia peccavi nimis cogitatione, verbo et opere:
								<span class="mass-action">[He strikes his breast three times.]</span>
								mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joannem
								Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et te, Pater, orare pro me ad Dominum Deum nostrum.
							</td>
							<td>
								<i>V.</i> I confess to Almighty God, to blessed Mary ever Virgin, to blessed Michael the Archangel, to blessed John the Baptist, to the
								holy Apostles Peter and Paul, to all the Saints, and to thee, Father, that I have sinned exceedingly, in thought, word, and deed:
								<span class="mass-action">[He strikes his breast three times.]</span> through my fault, through my fault, through my most grievous
								fault. Therefore I beseech blessed Mary ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter
								and Paul, all the Saints, and thee, Father, to pray to the Lord our God for me.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Misereatur tui omnipotens Deus, et dimissis peccatis tuis, perducat te ad vitam æternam.</td>
							<td><i>R.</i> May Almighty God have mercy upon thee, forgive thee thy sins, and bring thee to life everlasting.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Amen.</td>
							<td><i>V.</i> Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The servers make the following confession:</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>V.</i> Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis
								Petro et Paulo, omnibus Sanctis, et tibi, pater: quia peccavi nimis cogitatione, verbo et opere:
								<span class="mass-action">[He strikes his breast three times.]</span>
								mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joannem
								Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et te, Pater, orare pro me ad Dominum Deum nostrum.
							</td>
							<td>
								<i>V.</i> I confess to Almighty God, to blessed Mary ever Virgin, to blessed Michael the Archangel, to blessed John the Baptist, to the
								holy Apostles Peter and Paul, to all the Saints, and to thee, Father, that I have sinned exceedingly, in thought, word, and deed:
								<span class="mass-action">[He strikes his breast three times.]</span> through my fault, through my fault, through my most grievous
								fault. Therefore I beseech blessed Mary ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter
								and Paul, all the Saints, and thee, Father, to pray to the Lord our God for me.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam.</td>
							<td><i>R.</i> May Almighty God have mercy upon you, forgive you your sins, and bring you to life everlasting.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Amen.</td>
							<td><i>V.</i> Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant joins his hands and gives the absolution.</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>V.</i> Indulgentiam, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> absolutionem, et remissionem peccatorum
								nostrorum, tribuat nobis omnipotens et miseri cors Dominus.
							</td>
							<td>
								<i>V.</i> May the Almighty and merciful Lord grant us pardon,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> absolution, and remission of our sins.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Amen.</td>
							<td><i>R.</i> Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He bows his head and continues:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Deus, tu conversus vivificabis nos.</td>
							<td><i>V.</i> Thou wilt turn, O God, and bring us to life.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et plebs tea lætabitur in te.</td>
							<td><i>R.</i> And Thy people shall rejoice in Thee.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Ostende nobis, Domine, misericordiam tuam.</td>
							<td><i>V.</i> Show us, O Lord, Thy mercy.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et salutare tuum da nobis.</td>
							<td><i>R.</i> And grant us Thy salvation.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Domine, exaudi orationem meam.</td>
							<td><i>V.</i> O Lord, hear my prayer.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et clamor meus ad te veniat.</td>
							<td><i>R.</i> And let my cry come unto Thee.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant says in a clear voice:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Oremus.</td>
							<td><i>V.</i> Let us pray.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-action">Stand.</p>

				<p class="mass-note">Then going up the Alter, he says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Aufer a nobis, quæsumus, Domine, iniquitates nostras: ut ad Sancta sanctorum puris mereamur mentibus introire. Per Christum Dominum
								nostrum. Amen.
							</td>
							<td>
								Take away from us our iniquities, we en treat Thee, O Lord, that with pure minds we may worthily enter into the Holy of Holies. Through
								Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He kisses the Altar in the middle where the relics of the Saints are enclosed saying silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Oramus te, Domine, per merita sanctorum tuorum, quorum reliquiæ hic sunt, et omnium Sanctorum: ut indulgere digneris omnia peccata mea.
								Amen.
							</td>
							<td>
								We beseech Thee, O Lord, by the merits of Thy Saints, whose relics are here, and of all the Saints, that Thou wilt deign to pardon me
								all my sins. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					In Solemn Masses, except Masses for the Dead, the alter is here incensed. While blessing the incense, the Celebrant says:
				</p>

				<table>
					<tbody>
						<tr>
							<td>Ab illo <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> benedicaris, in cujus honore cremaberis. Amen.</td>
							<td>Be <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> blessed by Him in whose honour thou art burnt. Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					Taking the thurible from the Deacon, he incenses the altar in silence. Afterwards, the Deacon takes the thurible and, in turn, incenses the
					Celebrant.
				</p>
			</section>

			<section v-if="mass.introit" class="mass-contain">
				<h4>THE INTROIT</h4>
				<p class="mass-note">The Celebrant makes the Sign of the Cross and recites the Introit antiphon.</p>

				<h5>{{ mass.introit[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.introit[1] }}</td>
							<td>{{ mass.introit[2] }}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE KYRIE ELEISON</h4>
				<p class="mass-note">The Celebrant joins his hands and alternates with the servers, saying:</p>

				<table class="text-center">
					<tbody>
						<tr>
							<td><i>V.</i> Kyrie, eleison.</td>
							<td><i>V.</i> Lord, have mercy on us.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Kyrie, eleison.</td>
							<td><i>R.</i> Lord, have mercy on us.</td>
						</tr>
						
						<tr>
							<td class="pb-8"><i>V.</i> Kyrie, eleison.</td>
							<td><i>V.</i> Lord, have mercy on us.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Christe, eleison.</td>
							<td><i>V.</i> Christ, have mercy on us.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Christe, eleison.</td>
							<td><i>R.</i> Christ, have mercy on us.</td>
						</tr>
						
						<tr>
							<td class="pb-8"><i>V.</i> Christe, eleison.</td>
							<td><i>V.</i> Christ, have mercy on us.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Kyrie, eleison.</td>
							<td><i>V.</i> Lord, have mercy on us.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Kyrie, eleison.</td>
							<td><i>R.</i> Lord, have mercy on us.</td>
						</tr>

						<tr>
							<td><i>V.</i> Kyrie, eleison.</td>
							<td><i>V.</i> Lord, have mercy on us.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE GLORIA IN EXCELSIS</h4>
				<p class="mass-note">
					At the middle of the Altar, the Celebrant extends, elevates, and joins his hands, slightly bowing, and says the Gloria in excelsis.
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Gloria in excelsis Deo, et in terra pax hominibus bonæ voluntatis. Laudamus te. Benedicimus te.
								<span class="mass-action">[Bow]</span> Adoramus te. Glorificamus te. <span class="mass-action">[Bow]</span> Gratias agimus tibi propter
								magnam gloriam tuam. Domine Deus, Rex cælestis, Deus Pater omnipotens. Domine Fili unigenite,
								<span class="mass-action">[Bow]</span> Jesu Christe. Domine Deus, Agnus Dei, Filius Patris. Qui tollis peccata mundi, miserere nobis.
								Qui tollis peccata, mundi, <span class="mass-action">[Bow]</span> suscipe deprecationem nostram. Qui sedes ad dexteram Patris, miserere
								nobis. Quoniam tu solus Sanctus. Tu solus Dominus. Tu solus Altissimus, <span class="mass-action">[Bow]</span> Jesu Christe.
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Cum Sancto Spiritu, in gloria Dei Patris. Amen.
							</td>
							<td>
								Glory be to God on high. And on earth peace to men of good will. We praise Thee. We bless Thee. We
								<span class="mass-action">[Bow]</span> adore Thee. We glorify Thee. We give Thee <span class="mass-action">[Bow]</span> thanks for Thy
								great glory. Lord God, heavenly King, God the Father Almighty. Lord <span class="mass-action">[Bow]</span> Jesus Christ, Only-begotten
								Son, Lord God, Lamb of God, Son of the Father. Thou Who takest away the sins of the world, have mercy on us. Thou Who takest away the
								sins of the world, <span class="mass-action">[Bow]</span> receive our prayer. Thou Who sittest at the right hand of the Father, have
								mercy on us. For Thou alone art holy. Thou alone art the Lord. Thou alone, O <span class="mass-action">[Bow]</span> Jesus Christ, art
								most high. <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> With the Holy Ghost, in the glory of God the Father.
								Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant kisses the Altar, and turning toward the faithful, says:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.collect" class="mass-contain">
				<h4>THE COLLECT</h4>
				<p class="mass-note">The Celebrant returns to the Missal and sings the Collect:</p>

				<h5 v-html="mass.collect[0]"></h5>

				<table>
					<tbody>
						<tr>
							<td v-html="mass.collect[1]"></td>
							<td v-html="mass.collect[2]"></td>
						</tr>
						
						<tr>
							<td><i>R.</i> Amen.</td>
							<td><i>R.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.epistle" class="mass-contain">
				<h4>THE EPISTLE</h4>
				<p class="mass-action">Sit.</p>
				<p class="mass-note">In Solemn Masses, the Subdeacon sings the Epistle.</p>
				<p class="mass-note">In Low Masses, the Celebrant reads the Epistle and the chants occurring after it at the right-hand side of the altar.</p>

				<h5>{{ mass.epistle[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>Lection Epístolæ beáti Petri Apóstoli ad Romános...</td>
							<td>Lesson from the Epistle of the blessed Apostle Peter to the Romans...</td>
						</tr>
						<tr>
							<td>{{ mass.epistle[1] }}</td>
							<td>{{ mass.epistle[2] }}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.gradual" class="mass-contain">
				<h4>THE GRADUAL</h4>
				<p class="mass-note">The Gradual is sung by the Choir, and read silently by the Celebrant.</p>

				<h5>{{ mass.gradual[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.gradual[1] }}</td>
							<td>{{ mass.gradual[2] }}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.alleluia" class="mass-contain">
				<h4>THE ALLELUIA</h4>
				<p class="mass-note">The Alleluia sung by the Choir, and read silently by the Celebrant.</p>

				<h5>{{ mass.alleluia[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.alleluia[1] }}</td>
							<td>{{ mass.alleluia[2] }}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.tract" class="mass-contain">
				<h4>THE TRACT</h4>
				<p class="mass-note">The Tract is sung by the Choir, and read silently by the Celebrant.</p>

				<h5>{{ mass.tract[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.tract[1] }}</td>
							<td>{{ mass.tract[2] }}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.gospel">
				<h4>THE GOSPEL</h4>
				<p class="mass-note">
					In Solemn Masses, the Deacon places the Book in the middle of the altar, and except at Masses for the Dead, the Celebrant blesses the
					incense as above. Then, the Deacon kneels before the altar, joins his hands and says:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Munda cor meum ac labia mea, omnipotens Deus, qui labia Isaiæ Prophetæ calculo mundasti ignito ita me tua grata miseratione dignare
								mundare, ut sanctum Evangelium tuum digne valeam nuntiare. Per Christum Dominum nostrum. Amen.
							</td>
							<td>
								Cleanse my heart and my lips, O almighty God, Who didst cleanse the lips of the prophet Isaiah with a burning coal; through Thy gracious
								mercy so purify me that I may worthily proclaim Thy holy Gospel. Through Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					Afterwards, he takes the Book from the altar, and again kneeling down before the Celebrant, asks his blessing, saying:
				</p>

				<table>
					<tbody>
						<tr>
							<td>Jube, Domne benedicere.</td>
							<td>Pray, Lord, a blessing.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant, standing, says:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Dominus sit in corde tuo, et in labiis tuis: ut digne et competenter annunties Evangelium suum. In nomine Patris,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> et Filii, et Spiritus Sancti. Amen.
							</td>
							<td>
								May the Lord be in thy heart and on thy lips that thou mayest worthily and fittingly proclaim His Gospel. In the Name of the Father, and
								of the Son, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and of the Holy Ghost. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					Having received the blessing, he kisses the hands of the Celebrant and goes to the lectern with the thurifer and torchbearers, joins his
					hands, and says:
				</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-action">Stand.</p>
				<p class="mass-action">Make the Sign of the Cross of the forehead, lips, and heart.</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>V.</i> <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Sequentia Sancti Evangelii secundum
								{{ mass.gospel[0] }}.
							</td>
							<td>
								<i>V.</i> <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> The continuation of the holy Gospel according to
								{{ mass.gospel[0] }}.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Gloria tibi, Domine.</td>
							<td><i>R.</i> Glory to Thee, O Lord.</td>
						</tr>
					</tbody>
				</table>

				<h5>{{ mass.gospel[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.gospel[1] }}</td>
							<td>{{ mass.gospel[2] }}</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">At the end of the Gospel, the Servers answer:</p>

				<table>
					<tbody>
						<tr>
							<td><i>R.</i> Laus tibi, Christe.</td>
							<td><i>R.</i> Praise be to Thee, O Christ.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">At Solemn Masses, the Subdeacon carries the book to the Celebrant, who kisses the book, saying:</p>

				<table>
					<tbody>
						<tr>
							<td>Per evangelica dicta, deleantur nostra delicta.</td>
							<td>Through the words of the Gospel, may our sins be blotted out.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">At Solemn Masses, he is incensed by the Deacon.</p>

				<p class="mass-note">
					In Masses for the Dead, Munda cor meum is said, but the blessing is not sought, the Celebrant does not kiss hte book and does not say Per
					evangelica dicta.
				</p>
			</section>

			<section class="mass-contain">
				<h4>THE SERMON</h4>
				<p class="mass-action">Sit.</p>
				<p class="mass-note">The Celebrant gives the Sermon.</p>
			</section>

			<section>
				<h4>THE CREDO</h4>
				<p>
					The Creed is said only on Sundays, feasts of the first class, feasts of the second class of our Lord, our Lady, and the Apostles, and at
					votive Masses of the first class.
				</p>
				<p class="mass-action">Stand.</p>
				<p class="mass-note">
					Then standing at the middle of the altar, he extends, elevates, and joins his hands saying the Credo, and continues with joined hands. .
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Credo in unum <span class="mass-action">[Bow to Cross]</span> Deum, Patrem omnipotentem, factorem cæli et terræ, visibilium omnium et
								invisibilium. Et in unum Dominum <span class="mass-action">[Bow to Cross]</span> Jesum Christum, Filium Dei unigenitum: et ex Patre
								natum ante omnia sǽcula, Deum de Deo, lumen de lumine, Deum verum de Deo vero. Genitum, non factum, consubstantialem Patri: per quem
								omnia facta sunt. Qui propter nos homines, et propter nostram salutem descendit de cælis.
							</td>
							<td>
								I believe in one God, the <span class="mass-action">[Bow to Cross]</span> Father almighty, maker of heaven and earth, and of all things
								visible and invisible. And in one Lord
								<span class="mass-action">[Bow to Cross]</span>
								Jesus Christ, the only-begotten Son of God. Born of the Father before all ages. God of God, Light of Light, true God of true God.
								Begotten, not made: of one substance with the Father; by Whom all things were made. Who for us men, and for our salvation came down from
								heaven.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-action">Genuflect.</p>

				<table>
					<tbody>
						<tr class="text-center font-weight-bold">
							<td>ET INCARNATUS EST DE SPIRITU SANCTO EX MARIA VIRGINE: ET HOMO FACTUS EST.</td>
							<td>AND BECAME INCARNATE BY THE HOLY GHOST OF THE VIRGIN MARY: AND WAS MADE MAN.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-action">Stand.</p>

				<table>
					<tbody>
						<tr>
							<td>
								Crucifixus etiam pro nobis: sub Pontio Pilato passus et sepultus est. Et resurrexit tertia die, secundum Scripturas. Et ascendit in
								cælum: sedet ad dexteram Patris. Et iterum venturus est cum gloria judicare vivos et mortuos: cujus regni non erit finis. Et in Spiritum
								Sanctum, Dominum et vivificantem: qui ex Patre, Filioque procedit. Qui cum Patre et Filio simul
								<span class="mass-action">[Bow to Cross]</span> adoratur et conglorificatur: qui locutus est per Prophetas. Et unam, sanctam, catholicam
								et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et exspecto resurrectionem mortuorum.
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Et vitam venturi sæculi. Amen.
							</td>
							<td>
								He was also crucified for us, suffered under Pontius Pilate, and was buried. And on the third day He rose again according to the
								Scriptures. He ascended into heaven and sitteth at the right hand of the Father. He will come again in glory to judge the living and the
								dead and His kingdom will have no end. And in the Holy Ghost, the Lord and Giver of life: Who proceedeth from the Father and the Son.
								Who together with the Father and the Son is <span class="mass-action">[Bow to Cross]</span> adored and glorified; and Who spoke through
								the Prophets. And One, Holy, Catholic and Apostolic Church. I confess one baptism for the forgiveness of sins. And I await the
								resurrection of the dead <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and the life of the world to come.
								Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<v-divider class="mb-6 mt-4"></v-divider>

			<div class="mass-break"></div>

			<h3>THE MASS OF THE FAITHFUL</h3>

			<section v-if="mass.offertory">
				<h4>THE OFFERTORY ANTIPHON</h4>

				<p class="mass-note">The Celebrant kisses the Altar, and turning to the faithful sings:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Oremus.</td>
							<td><i>V.</i> Let us pray.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The choir sings the Offertory Antiphon.</p>

				<h5>{{ mass.offertory[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.offertory[1] }}</td>
							<td>{{ mass.offertory[2] }}</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					The Celebrant takes the paten with the host, in Solemn Masses, brought by the Deacon, and offers up the host, saying silently:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Suscipe, Sancte Pater, omnipotens æterne Deus, hanc immaculatam hostiam, quam ego indignus famulus tuus offero tibi Deo meo vivo et
								vero, pro innumerabilibus peccatis, et offensionibus, et negligentiis meis, et pro omnibus circumstantibus, sed et pro omnibus fidelibus
								christianis vivis atque defunctis: ut mihi et illis proficiat ad salutem in vitam æternam. Amen.
							</td>
							<td>
								Accept, O Holy Father, almighty and eternal God, this unspotted Host, which I, Thine unworthy servant, offer unto Thee, my living and
								true God, to atone for my countless sins, offenses and negligences: on behalf of all here present and likewise for all faithful
								Christians, living and dead, that it may avail both me and them as a means of salvation, unto life eternal. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					Making the Sign of the Cross with the paten, he places the host upon the corporal. The wine and water are poured into the chalice, the
					Celebrant blessing the water before it is mixed, saying silently:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Deus, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> qui humanæ substantiæ dignitatem mirabiliter condidisti,
								et mirabilius reformasti: da nobis per hujus aquæ et vini mysterium, ejus divinitatis esse consortes, qui humanitatis nostræ fieri
								dignatus est particeps, Jesus Christus Filius tuus Dominus noster: Qui tecum vivit et regnat in unitate Spiritus Sancti Deus: per omnia
								sǽcula sæculórum. Amen.
							</td>
							<td>
								O God, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> who in creating man didst exalt his nature very
								wonderfully and yet more wonderfully didst establish it anew; by the Mystery signified in the mingling of this water and wine, grant us
								to have part in the Godhead of Him Who hath deigned to become a partaker of our humanity, Jesus Christ, Thy Son, our Lord, Who liveth
								and reigneth with Thee in the unity of the Holy Ghost, one God, for ever and ever. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p>In Masses for the Dead, the preceding prayer is said, but the water is not blessed.</p>
				<p class="mass-note">Returning to the middle of the Altar, the Celebrant takes the chalice and offers it to God, saying silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Offerimus tibi, Domine, calicem salutaris tuam deprecantes clementiam: ut in conspectu divinæ majestatis tuæ, pro nostra et totius mundi
								salute, cum odore suavitatis ascendat. Amen.
							</td>
							<td>
								We offer unto Thee, O Lord, the chalice of salvation, entreating Thy mercy that our offering may ascend with a sweet fragrance in the
								sight of Thy divine Majesty, for our own salvation and for that of the whole world. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					He makes the Sign of the Cross with the chalice, and placing it on the corporal, he covers it with the pall. Bowing down, he says silently:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								In spiritu humilitas, et in animo contrito suscipiamur a te, Domine, et sic fiat sacrificum nostrum in conspectu tuo hodie, ut placeat
								tibi, Domine Deus.
							</td>
							<td>
								Humbled in spirit and contrite of heart, may we find favour with Thee, O Lord: and may our sacrifice be so offered this day in Thy sight
								as to be pleasing to Thee, O Lord God.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Raising his eyes and extending his hands, he says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Veni, Sanctificator omnipotens æterne Deus: et benedic
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> hoc sacrificum, tuo sancto nomini præparatum.
							</td>
							<td>
								Come, O Sanctifier, almighty and eternal God, and bless
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> this sacrifice which is prepared for the glory of Thy holy
								Name.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE INCENSING</h4>

				<p>The incensing is only done at Solemn Masses.</p>

				<p class="mass-note">The Celebrant now blesses the incense.</p>

				<table>
					<tbody>
						<tr>
							<td>
								Per intercessionem beatæ Michaelis Archangeli, stantis a dextris altaris incensi, et omnium electorum suorum, incensum istud dignetur
								Dominus bene<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon>dicere, et in odorem suavitatis accipere. Per
								Christum Dominum nostrum. Amen.
							</td>
							<td>
								May the Lord, by the intercession of blessed Michael the Archangel, who standeth at the right side of the altar of incense, and of all
								His Elect, vouchsafe to bless this incense and receive it as an odour of sweetness: through Jesus Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant incenses the bread and wine:</p>

				<table>
					<tbody>
						<tr>
							<td>Incensum istud a te benedictum ascendat ad te, Domine: et descendat super nos misericordia tua.</td>
							<td>May this incense, which Thou halt blessed, O Lord, ascend to Thee, and may Thy mercy descend upon us.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Then he incenses the Altar.</p>

				<h5>Psalm 140:2-4</h5>

				<table>
					<tbody>
						<tr>
							<td>Dirigatur, Domine, oratio mea, sicut incensum in conpectu tuo: elevatio manuum mearum sacrificium vespertinum.</td>
							<td>Let my prayer, O Lord, be directed as in cense in Thy sight: the lifting up of my hands as an evening sacrifice.</td>
						</tr>
						
						<tr>
							<td>Pone, Domine, custodiam ori meo, et ostium circumstantiæ labiis meis.</td>
							<td>Set a watch, O Lord, before my mouth, and a door round about my lips.</td>
						</tr>
						
						<tr>
							<td>Ut non declinet cor meum in verbo malitiæ, ad excusandas, excusationes in peccata.</td>
							<td>May my heart not incline to evil words, to make excuses for sins.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Returning the thurible, the Celebrant says:</p>

				<table>
					<tbody>
						<tr>
							<td>Accendat in nobis Dominus ignem sui amoris, et flammam æternæ caritatis. Amen.</td>
							<td>May the Lord enkindle within us the fire of His love, and the flame of everlasting charity. Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant is now incensed followed by the clergy and the faithful.</p>
				<p class="mass-action">Stand for the incensing.</p>
			</section>

			<section>
				<h4>THE WASHING OF THE HANDS</h4>

				<p class="mass-note">The Celebrant then washes his fingers, while reciting the following, silently:</p>

				<h5>Psalm 25:6-12</h5>

				<table>
					<tbody>
						<tr>
							<td>Lavabo inter innocentes manus meas: et circumdabo altare tuum, Domine.</td>
							<td>I will wash my hands among the innocent: and will compass Thine altar, O Lord.</td>
						</tr>
						
						<tr>
							<td>Ut audiam vocem laudis: et enarrem universa mirabilia tua.</td>
							<td>That I may hear the voice of Thy praise: and tell of all Thy wondrous works.</td>
						</tr>
						
						<tr>
							<td>Domine, dilexi decorem domus tuæ: et locum habitationis gloriæ tuæ.</td>
							<td>O Lord, I have loved the beauty of Thy house: and the place where Thy glory dwelleth.</td>
						</tr>
						
						<tr>
							<td>Ne perdas cum impiis, Deus, animam meam: et cum viris sanguinum vitam meam:</td>
							<td>Destroy not my soul with the wicked, O God: nor my life with men of blood.</td>
						</tr>
						
						<tr>
							<td>In quorum manibus iniquitates sunt: dextera eorum repleta est muneribus.</td>
							<td>In whose hands are iniquities: their right hand is filled with gifts.</td>
						</tr>
						
						<tr>
							<td>Ego autem in innocentia mea ingressus sum: redime me, et miserere mei.</td>
							<td>But I have walked in innocence: redeem me, and have mercy on me.</td>
						</tr>
						
						<tr>
							<td>Pes meus stetit in dirécto: in ecclésiis benedícam te, Dómine.</td>
							<td>My foot hath stood in the straight way: in the churches I will bless Thee, O Lord.</td>
						</tr>
					</tbody>
				</table>

				<p>In Masses for the Dead and during Passion time in Masses of the season, the Gloria Patri is omitted.</p>

				<table>
					<tbody>
						<tr>
							<td>Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in princípio, et nunc, et semper: et in sǽcula sæculórum. Amen.</td>
							<td>
								Glory be to the Father, and to the Son, and to the Holy Ghost. As it was in the beginning, is now, and ever shall be, world without end.
								Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE PRAYER TO THE HOLY TRINITY</h4>

				<p class="mass-note">Then, bowing slightly before the center of the altar and placing his joined hands upon it, the Celebrant says:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Suscipe, sancta Trinitas, hanc oblationem, quam tibi offerimus ob memoriam passionis, resurrectionis, et ascensionis Jesu Christi Domini
								nostri: et in honorem beatæ Mariæ semper Virginis, et beati Joannis Baptistæ, et sanctorum Apostolorum Petri et Pauli, et istorum, et
								omnium Sanctorum: ut illis proficiat ad honorem, nobis autem ad salutem: et illi pro nobis intercedere dignentur in cælis, quorum
								memoriam agimus in terris. Per eundem Christum Dominum nostrum. Amen.
							</td>
							<td>
								Receive, O Holy Trinity, this oblation which we make to Thee in memory of the Passion, Resurrection, and Ascension of our Lord Jesus
								Christ; and in honour of blessed Mary ever Virgin, of blessed John the Baptist, the holy Apostles Peter and Paul, of these and of all
								the Saints. To them let it bring honour, and to us salvation, and may they whom we are commemorating here on earth deign to plead for us
								in heaven. Through the same Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE ORATE FRATRES</h4>

				<p class="mass-note">He kisses the altar and turns to the faithful. Extending and then joining his hands, he says:</p>

				<table>
					<tbody>
						<tr>
							<td>Orate fratres: ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.</td>
							<td>Pray brethren, that my Sacrifice and yours may be acceptable to God the Father Almighty.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Servers reply:</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>R.</i> Suscipiat Dominus sacrificium de manibus tuis ad laudem et gloriam nominis sui, ad utilitatem quoque nostram, totiusque
								Ecclesiæ suæ sanctæ.
							</td>
							<td>
								<i>R.</i> May the Lord accept the Sacrifice from thy hands, to the praise and glory of His Name, for our benefit and for that of all His
								holy Church.
							</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Amen.</td>
							<td><i>V.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.secret" class="mass-contain">
				<h4>THE SECRET</h4>

				<p class="mass-note">Then with outstretched hands, the Celebrant says the Secret in silence:</p>
				<h5>{{ mass.secret[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.secret[1] }}</td>
							<td>{{ mass.secret[2] }}</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He concludes aloud:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Per omnia sǽcula sæculórum.</td>
							<td><i>V.</i> For ever and ever.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Amen.</td>
							<td><i>R.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE PREFACE</h4>

				<p class="mass-action">Stand for the Preface.</p>

				<p class="mass-note">The Celebrant sings:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>

						<tr>
							<td><i>V.</i> Sursum corda.</td>
							<td><i>V.</i> Lift up your hearts.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Habemus ad Dominum.</td>
							<td><i>R.</i> We have lifted them up to the Lord.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Gratias agamus Domino Deo nostro.</td>
							<td><i>V.</i> Let us give thanks to the Lord our God.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Dignum et justum est.</td>
							<td><i>R.</i> It is meet and just.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">With his hands extended, he sings the Preface.</p>

				<table v-if="mass.preface">
					<tbody>
						<tr>
							<td>{{ mass.preface[1] }}</td>
							<td>{{ mass.preface[2] }}</td>
						</tr>
					</tbody>
				</table>

				<table v-else>
					<tbody>
						<tr>
							<td>
								Vere dignum et justum est, æquum et salutare, nos tibi semper, et ubique gratias agere: Domine sancte, Pater omnipotens, æterne Deus:
								Qui cum unigenito Filio tuo, et Spiritu Sancto, unus es Deus, unus es Dominus: non in unius singularitate personæ, sed in unius
								Trinitate substantiæ. Quod enim de tua gloria, revelante te, credimus, hoc de Filio tuo, hoc de Spiritu Sancto, sine differentia dis-
								cretionis sentimus. Ut in confessione veræ, sempiternæque Deitatis, et in personis proprietas, et in essentia unitas, et in majestate
								adoretur æqualitas. Quam laudant Angeli atque Archangeli, Cherubim quoque ac Seraphim: qui non cessant clamare quotidie, una voce
								dicentes:
							</td>
							<td>
								It is truly meet and just and profitable for our salvation, that we should at all times and in all places give thanks unto Thee, O holy
								Lord, Father almighty, eternal God; Who, together with Thine onlybegotten Son, and the Holy Ghost, art one God, one Lord: not in the
								oneness of a single Person, but in the Trinity of one substance. For what we believe by Thy revelation of Thy glory, the same do we
								believe of Thy Son, the same of the Holy Ghost, without difference or separation. So that in confessing the true and eternal Godhead, we
								should adore distinction in persons, unity in essence, and equality in Majesty: Which the Angels and Archangels, the Cherubim also and
								Seraphim do praise nor cease to cry out in one voice:
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE SANCTUS</h4>

				<p class="mass-action">Kneel.</p>

				<p class="mass-note">
					The Celebrant again joins his hands, and bowing, says the Sanctus, which the choir and the faithful sing at Solemn Mass.
				</p>

				<div class="text-center text-red-lighten-1">
					<v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon>
				</div>

				<table class="font-weight-bold text-uppercase text-center">
					<tbody>
						<tr>
							<td>SANCTUS, SANCTUS, SANCTUS, DOMINUS DEUS SABAOTH. PLENI SUNT CÆLI ET TERRA</td>
							<td>HOLY, HOLY, HOLY, LORD GOD OF HOSTS. HEAVEN AND EARTH ARE FULL OF THY GLORY.</td>
						</tr>
						
						<tr>
							<td>HOSANNA IN EXCELSIS.</td>
							<td>HOSANNA IN THE HIGHEST.</td>
						</tr>
						
						<tr>
							<td><v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon></td>
							<td><v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon></td>
						</tr>
						
						<tr>
							<td>BENEDICTUS QUI VENIT IN NOMINE DOMINI.</td>
							<td>BLESSED IS HE WHO COMETH IN THE NAME OF THE LORD.</td>
						</tr>
						
						<tr>
							<td>HOSANNA IN EXCELSIS.</td>
							<td>HOSANNA IN THE HIGHEST.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<v-divider class="mb-6 mt-4"></v-divider>

			<div class="mass-break"></div>

			<h3>THE CANON OF THE MASS</h3>

			<p class="mass-note">The Celebrant, bowing low over the Altar, begins the Canon saying silently:</p>

			<section>
				<h5>For the Church and Ecclesiastical Authorities</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Te igitur, clementissime Pater, per Jesum Christum Filium tuum, Dominum nostrum, supplices rogamus, ac petimus, uti accepta habeas, et
								benedicas, hæc <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> dona, hæc
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> munera, hæc
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> sancta sacrificia illibata, in primis, quæ tibi offerimus pro
								Ecclesia tua sancta catholica: quam pacificare, custodire, adunare, et regere digneris toto orbe terrarum: una cum famulo tuo Papa
								nostro [name], et Antistite nostro [bishop], et omnibus orthodoxis atque catholicæ et apostolicæ fidei cultoribus.
							</td>
							<td>
								Most merciful Father, we humbly pray and beseech Thee, through Jesus Christ Thy Son, our Lord, to accept and bless these
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> gifts, these
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> presents, these
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> holy unspotted Sacrifices, which we offer up to Thee, in the
								first place, for Thy Holy Catholic Church, that it may please Thee to grant her peace, to preserve, unite, and govern her throughout the
								world; as also for Thy servant [name], our Pope, and [bishop] our bishop, and for all orthodox believers and all who profess the
								Catholic and Apostolic faith.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h5>Commemoration of the Living</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Memento, Domine, famulorum, famularumque tuarum [name] et [name], et omnium circumstantium, quorum tibi fides cognita est, et nota
								devotio, pro quibus tibi offerimus: vel qui tibi offerunt hoc sacrificium laudis, pro se, suisque omnibus: pro redemptione animarum
								suarum, pro spe salutis, et incolumitatis suæ: tibi-que reddunt vota sua æterno Deo, vivo et vero.
							</td>
							<td>
								Be mindful, O Lord, of Thy servants and handmaids, [name] and [name], and of all here present, whose faith and devotion are known to
								Thee, for whom we offer, or who offer up to Thee, this Sacrifice of praise for themselves and all those dear to them, for the redemption
								of their souls and the hope of their safety and salvation: who now pay their vows to Thee, the eternal, living and true God.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.st_invocation">
				<h5>Invocation of the Saints</h5>

				<table>
					<tbody>
						<tr>
							<td>
								{{ mass.st_invocation[1] }}
							</td>
							<td>
								{{ mass.st_invocation[2] }}
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-else>
				<h5>Invocation of the Saints</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Communicantes, et memoriam venerantes, in primis gloriosæ semper Virginis Mariæ, Genitricis Dei et Domini nostri Jesu Christi: sed et
								beati Joseph ejusdem Virginis Sponsi, et beatorum Apostolorum ac Martyrum tuorum, Petri et Pauli, Andreæ, Jacobi, Joannis, Thomæ,
								Jacobi, Philippi, Bartholomæi, Matthæi, Simonis et Thaddæi: Lini, Cleti, Clementis, Xysti, Cornelii, Cypriani, Laurentii, Chrysogoni,
								Joannis et Pauli, Cosmæ et Damiani: et omnium Sanctorum tuorum; quorum meritis precibusque concedas, ut in omnibus protectionis tuæ
								munia mur auxilio. Per eundem Christum Dominum nostrum. Amen.
							</td>
							<td>
								In communion with, and honoring the memory in the first place of the glorious ever Virgin Mary Mother of our God and Lord Jesus Christ;
								also blessed Joseph, her Spouse; and likewise of Thy blessed Apostles and Martyrs, Peter and Paul, Andrew, James, John, Thomas, James,
								Philip, Bartholomew, Matthew, Simon and Thaddeus, Linus, Cletus, Clement, Sixtus, Cornelius, Cyprian, Lawrence, Chrysogonus, John and
								Paul, Cosmas and Damian, and of all Thy Saints. Grant for the sake of their merits and prayers that in all things we may be guarded and
								helped by Thy protection. Through the same Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE CONSECRATION</h4>

				<div class="text-center text-red-lighten-1"><v-icon>mdi-bell-outline</v-icon></div>
				<p class="mass-note">Spreading his hands over the oblation, he says:</p>

				<h5>Oblation of the Victim to God</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Hanc igitur oblationem servitutis nostræ, sed et cunctæ familiæ tum, quæsumus, Domine, ut placatus accipias: diesque nostros in tua pace
								disponas, atque ab acterna damnatione nos eripi, et in electorum tuorum jubeas grege numerari. Per Christum Dominum nostrum. Amen.
							</td>
							<td>
								We therefore beseech Thee, O Lord, graciously to accept this oblation of our service and that of Thy whole household. Order our days in
								Thy peace, and command that we be rescued from eternal damnation and numbered in the flock of Thine elect. Through Christ our Lord.
								Amen.
							</td>
						</tr>
						
						<tr>
							<td>
								Quam oblationem tu, Deus, in omnibus, quæsumus,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> benedictam,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> adscriptam,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> ratam, rationabilem, acceptabilemque facere digneris: ut nobis
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Corpus, et
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Sanguis fiat dilectissimi Filii tui Domini nostri Jesu Christi.
							</td>
							<td>
								Humbly we pray Thee, O God, be pleased to make this same offering wholly
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> blessed, to
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> consecrate it, and
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> approve it, making it reasonable and acceptable, that it may
								become for us <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> the Body and
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Blood of Thy dearly beloved Son, our Lord Jesus Christ.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>Words of Consecration and Elevation</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Qui pridie quam pateretur, accepit panem in sanctas ac venerabiles manus suas, et elevatis oculis in cælum ad te Deum Patrem suum
								omnipotentem tibi gratias agens, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> benedixit, fregit, deditque
								discipulis suis, dicens: Accipite, et manducate ex hoc omnes.
							</td>
							<td>
								Who, the day before He suffered, took bread into His Holy and venerable hands, and having lifted His eyes to heaven, to Thee, God, His
								Almighty Father, giving thanks to Thee, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> blessed it, broke it,
								and gave it to His disciples, saying: Take and eat ye all of this.
							</td>
						</tr>
						
						<tr class="font-weight-bold text-center">
							<td>HOC EST ENIM CORPUS MEUM.</td>
							<td>FOR THIS IS MY BODY.</td>
						</tr>
					</tbody>
				</table>

				<div class="text-center text-red-lighten-1">
					<v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon>
				</div>

				<p class="mass-note">
					The Celebrant genuflects, adores the Sacred Host, rising he elevates It, and then placing It on the corporal, again adores It. Then,
					uncovering the Chalice he says:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Simili modo postquam cenatum est, accipiens et hunc præclarum Calicem in sanctas ac venerabiles manus suas: item tibi gratias agens,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon>
								benedixit, deditque discipulis suis, dicens: Accipite, eo bibite ex eo omnes.
							</td>
							<td>
								In like manner, after He had supped, taking also into His holy and venerable hands this goodly chalice, giving thanks to Thee, He
								blessed it, and gave it to His disciples, saying: Take and drink ye all of this.
							</td>
						</tr>
						
						<tr class="font-weight-bold text-center">
							<td>HIC EST ENIM CALIX SANGUINIS MEI, NOVI ET ÆTERNI TESTAMENTI: QUI PRO VOBIS ET PRO MULTIS EFFUNDETUR IN REMISSIONEM PECCATORUM.</td>
							<td>
								FOR THIS IS THE CHALICE OF MY BLOOD, OF THE NEW AND ETERNAL TESTAMENT: THE MYSTERY OF FAITH: WHICH SHALL BE SHED FOR YOU AND FOR MANY
								UNTO THE REMISSION OF SINS.
							</td>
						</tr>
					</tbody>
				</table>

				<div class="text-center text-red-lighten-1">
					<v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon>
				</div>

				<p class="mass-note">The Celebrant genuflects, elevates the Chalice and, setting It down he covers It and adores It again.</p>

				<table>
					<tbody>
						<tr>
							<td>Hæc quotiescumque feceritis, in mei memoriam facietis.</td>
							<td>As often as ye shall do these things, ye shall do them in remembrance of Me.</td>
						</tr>
					</tbody>
				</table>

				<h5>Oblation of the Victim to God</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Unde et memores, Domine, nos servi tui, sed et plebs tua sancta, ejusdem Christi Filii tui Domini nostri tam beatæ Passionis, nec non et
								ab inferis Resurrectionis, sedet in cælos gloriosæ ascensionis: offerimus præclaræ majestati tuæ de tuis donis ac datis hostiam
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> puram, hostiam
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> sanctam, hostiam
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> immaculatam Panem
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> sanctum vitæ æternæ, et
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Calicem salutis perpetuæ.
							</td>
							<td>
								And now, O Lord, we, Thy servants, and with us all Thy holy people, calling to mind the blessed Passion of this same Christ, Thy Son,
								our Lord, likewise His Resurrection from the grave, and also His glorious Ascension into heaven, do offer unto Thy most sovereign
								Majesty out of the gifts Thou hast bestowed upon us, a Victim which is
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> pure, a Victim which is
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> holy, a Victim which is
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> spotless, the
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> holy Bread of life eternal, and the
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Chalice of everlasting Salvation.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>To Ask God to Accept Our Offering</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Supra quæ propitio ac serene vultu respicere digneris: et accepta habere, sicuti accepta habere dignatus es munera pueri tui justi Abel,
								et sacrificium Patriarchæ nostri Abrahæ, et quod tibi obtulit summus sacerdos tuus Melchisedech, sanctum sacrificium, immaculatam
								hostiam.
							</td>
							<td>
								Deign to look upon them with a favorable and gracious countenance, and to accept them as Thou didst accept the offerings of Thy just
								servant Abel, and the sacrifice of our Patriarch Abraham, and that which Thy high priest Melchisedech offered up to Thee, a holy
								Sacrifice, an immaculate victim.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>For Blessings</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Supplices te rogamus, omnipotens Deus: jube hæc perferri per manus Sancti Angeli tui in sublime altare tuum, in conspectu divinæ
								majestatis tuæ: ut quoquot ex hac altaris participatione, sacrosanctum Filii tui
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Corpus, et
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Sanguinem sumpserimus omni benedictione cælesti et gratia
								repleamur. Per eundem Christum Dominum nostrum. Amen.
							</td>
							<td>
								Humbly we beseech Thee, almighty God, to command that these our offerings be carried by the hands of Thy holy Angel to Thine Altar on
								high, in the sight of Thy divine Majesty, so that those of us who shall receive the most sacred Body
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and Blood
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> of Thy Son by partaking thereof from this Altar may be filled
								with every grace and heavenly blessing. Through Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>Commemoration of the Dead</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Memento etiam, Domine, famu lorum famularumque tuarum [name] et [name], qui nos præcesserunt cum signo fidei, et dormiunt in somno
								pacis. Ipsis, Domine, et omnibus in Christo quiescentibus, locum refrigerii, lucis et pacis, ut indulgeas, deprecamur. Per eundem
								Christum Dominum nostrum. Amen.
							</td>
							<td>
								Be mindful, also, O Lord, of Thy servants and handmaids [name] and [name] who are gone before us with the sign of faith and who sleep
								the sleep of peace. To these, O Lord, and to all who rest in Christ, grant, we beseech Thee, a place of refreshment, light, and peace.
								Through the same Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>Invocation of the Saints</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Nobis quoque peccatoribus, famulis tuis, de multitudine miserationum tuarum sperantibus, partem aliquam, et societatem donare digneris,
								cum tuis sanctis Apostolis et Martyribus, cum Joanne, Stephano, Matthia, Barnaba, Ignacio, Alexandro, Marcellino, Petro, Felicitate,
								Perpetua, Agatha, Lucia, Agnete, Cæcilia, Anastasia, et omnibus Sanctis tuis: intra quorum nos consortium, non æstimator meriti, sed
								veniæ, quæsumus, largitor admitte. Per Christum Dominum nostrum.
							</td>
							<td>
								To us also Thy sinful servants, who put our trust in the multitude of Thy mercies, vouchsafe to grant some part and fellow ship with Thy
								Holy Apostles and Martyrs: with John, Stephen, Matthias, Barnabas, Ignatius, Alexander, Marcellinus, Peter, Felicity, Perpetua, Agatha,
								Lucy, Agnes, Cecilia, Anastasia, and all Thy Saints. Into their company we beseech Thee admit us, not considering our merits, but freely
								par doning our offenses. Through Christ our Lord.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE FINAL DOXOLOGY AND MINOR ELEVATION</h4>

				<table>
					<tbody>
						<tr>
							<td>
								Per quem hæc omnia Domine, semper bona creas,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> sanctificas,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> vivificas,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> benedicis, et præstas nobis.
							</td>
							<td>
								Through Whom, O Lord, Thou dost create, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> sanctify,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> quicken,
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> bless, and bestow upon us all these good things.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					He uncovers the chalice, and genuflects; then taking the Host in his right hand, and holding the chalice in his left, he signs with the sign
					of the cross three times over the chalice, saying:
				</p>

				<table class="text-center font-weight-bold">
					<tbody>
						<tr>
							<td>
								PER <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> IPSUM, ET CUM
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> IPSO, ET IN
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> IPSO,
							</td>
							<td>
								THROUGH <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> HIM AND WITH
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> HIM AND IN
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> HIM,
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He sigsn twice between the chalice and himself, saying:</p>

				<table class="text-center font-weight-bold">
					<tbody>
						<tr>
							<td>
								EST TIBI DEO PATRI <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> OMNIPOTENTI, IN UNITATE SPIRITUS
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> SANCTI,
							</td>
							<td>
								BE TO THEE, GOD THE FATHER <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> ALIMIGHTY, IN THE UNITY OF THE HOLY
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> GHOST,
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He elevates a little the cahlice with the Host, saying:</p>

				<table class="text-center font-weight-bold">
					<tbody>
						<tr>
							<td>OMNIS HONOR, ET GLORIA,</td>
							<td>ALL HONOR AND GLORY,</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Replacing the Host, and covering the chalice, he genuflects, and rising he says:</p>

				<table class="text-center">
					<tbody>
						<tr class="font-weight-bold">
							<td>PER OMNIA SǼCULA SÆCÚLORUM.</td>
							<td>FOR EVER AND EVER.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Amen.</td>
							<td><i>R.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE PATER NOSTER</h4>

				<p class="mass-note">He joins his hands and says:</p>

				<table>
					<tbody>
						<tr>
							<td>Oremus.</td>
							<td>Let us pray.</td>
						</tr>
						
						<tr>
							<td>Præceptis salutaribus moniti, et divina institutione formati, audemus dicere:</td>
							<td>Taught by our Savior's command and formed by the word of God, we dare to say:</td>
						</tr>
						
						<tr>
							<td>
								Pater Noster, qui es in cælis: sanctificetur nomen tuum: adveniat regnum tuum: fiat voluntas tua, sicut in cælo, et in terræ. Panem
								nostrum quotidianum da nobis hodie: et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in
								tentationem:
							</td>
							<td>
								Our Father, Who art in heaven, hallowed be Thy Name; Thy Kingdom come; Thy will be done on earth as it is in heaven, Give us this day
								our daily bread; and forgive us our trespasses as we forgive those who trespass against us. And lead us not into temptation.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Sed libera nos a malo.</td>
							<td><i>R.</i> But deliver us from evil.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Amen.</td>
							<td><i>V.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE LIBERA NOS</h4>

				<p class="mass-note">The Celebrant says the Libera nos silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Libera nos, quæsumus, Domine, ab omnibus malis, præritis, præsentibus, et futuris: et intercedente beata et gloriosa semper Virgine Dei
								Genitrice Maria, cum beatis Apostolis tuis Petro et Paulo, atque Andrea, et omnibus San<v-icon :size="18" class="text-blue-lighten-2"
								>mdi-cross-bolnisi</v-icon
								>ctis, da propitius pacem in diebus nostris: ut, ope misericordiæ tuæ adjuti, et a peccato simus semper liberi, et ab omni perturbatione
								securi
							</td>
							<td>
								Deliver us, we beseech Thee, O Lord, from all evils, past, present, and to come; and by the intercession of the blessed and glorious
								Mary, ever Virgin, Mother of God, together with Thy blessed Apostles Peter and Paul, and Andrew, and all the Saints, mercifully grant us
								peace in our days, that through the bounteous help of Thy mercy, we may be always free from sin and safe from all disquiet.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He breaks the Host over the Chalice saying silently:</p>

				<table>
					<tbody>
						<tr>
							<td>Per eumdem Dominum nostrum Jesum Christum, Filium tuum.</td>
							<td>Through the same Jesus Christ, Thy Son, our Lord.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He breaks off a Particle from the divided Host.</p>

				<table>
					<tbody>
						<tr>
							<td>Qui tecum vivit et regnat in unitate Spiritus Sancti Deus.</td>
							<td>Who liveth and reigneth with Thee in the unity of the Holy Ghost, God.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He concludes aloud:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Per omnia sǽcula sæculórum.</td>
							<td><i>V.</i> For ever and ever.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Amen.</td>
							<td><i>R.</i> Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE COMMINGLING OF THE SACRED BODY AND BLOOD</h4>

				<p class="mass-note">He makes the Sign of the Cross with a small Particle over the Chalice, saying:</p>

				<table>
					<tbody>
						<tr>
							<td>
								<i>V.</i> Pax <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Domini sit
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> semper vobis
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> cum.
							</td>
							<td>
								<i>V.</i> May the peace <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> of the Lord be always
								<v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> with you.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He places the Particle in the Chalice, saying:</p>

				<table>
					<tbody>
						<tr>
							<td>Hæc commixtio, et consecratio Corporis et Sanguinis Domini nostri Jesu Christi, fiat accipientibus nobis in vitam æternam. Amen.</td>
							<td>
								May this mingling and hallowing of the Body and Blood of our Lord Jesus Christ be for us who receive it a source of eternal life. Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section style="break-before: always">
				<h4>THE AGNUS DEI</h4>

				<p class="mass-action">Kneel.</p>
				<p class="mass-note">
					The choir and the faithful sing the Agnus Dei, which is recited by the Celebrant and ministers. At a Solemn Mass, the Celebrant and
					ministers exchange the sign of peace.
				</p>

				<table>
					<tbody>
						<tr>
							<td>Agnus Dei, qui tollis peccata mundi: miserere nobis.</td>
							<td>Lamb of God, Who takest away the sins of the world, have mercy on us.</td>
						</tr>
						
						<tr>
							<td>Agnus Dei, qui tollis peccata mundi: miserere nobis.</td>
							<td>Lamb of God, Who takest away the sins of the world, have mercy on us.</td>
						</tr>
						
						<tr>
							<td>Agnus Dei, qui tollis peccata mundi: dona nobis pacem.</td>
							<td>Lamb of God, Who takest away the sins of the world, grant us peace.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">With his eyes directed toward the Sacrament, he says silently:</p>

				<h5>The Prayer for Peace</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Domine Jesu Christe, qui dixisti Apostolis tuis: Pacem relinquo vobis, pacem meam do vobis: ne respicias peccata mea, sed fidem Ecclesiæ
								tuæ: eamque secundum voluntatem tuam pacificare et coadunare digneris: Qui vivis et regnas Deus per omnia sǽcula sæculórum. Amen.
							</td>
							<td>
								O Lord, Jesus Christ, Who didst say to Thine Apostles: Peace I leave you, My peace I give you: look not upon my sins, but upon the faith
								of Thy Church; and deign to give her that peace and unity which is agreeable to Thy will: God Who livest and reignest world without end.
								Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">At a Solemn Mass, the Kiss of Peace is given to the Deacon, who bears it to the ministers.</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Pax tecum.</td>
							<td><i>V.</i> Peace be with thee.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant then continues silently:</p>

				<h5>The Prayer for Sanctification</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Domine Jesu Christe, Fili Dei vivi, qui ex voluntate Patris, cooperante Spiritu Sancto, per mortem tuam mundum vivificasti: libera, me
								per hoc sacrosanctum Corpus et Sanguinem tuum ab omnibus iniquitatibus meis, et universis malis: et fac me tuis semper inhærere
								mandatis, et a te numquam separari permittas: Qui cum eodem Deo Patre et Spiritu Sancto vivis et regnas, Deus, in sǽcula. sæculórum.
								Amen.
							</td>
							<td>
								O Lord Jesus Christ, Son of the living God, Who, by the will of the Father and the cooperation of the Holy Ghost, has by Thy death given
								life to the world: deliver me by this, Thy most sacred Body and Blood, from all my iniquities and from every evil; make me cling always
								to Thy commandments, and permit me never to be separated from Thee. Who with the same God, the Father and the Holy Ghost, livest and
								reignest God, world without end. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<h5>The Prayer for Grace</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Perceptio Corporis tui, Domine Jesu Christe, quod ego indignus sumere præsumo, non mihi proveniat in judicium et condemnationem: sed pro
								tua pietate prosit mihi ad tutamentum mentis et corporis, et ad medelam percipiendam: Qui vivis et regnas cum Deo Patre in unitate
								Spiritus Sancti, Deus, per omnia sǽcula sæculórum. Amen.
							</td>
							<td>
								Let not the partaking of Thy Body, O Lord Jesus Christ, which I, though unworthy, presume to receive, turn to my judgment and
								condemnation; but through Thy mercy, may it be unto me a safeguard and a healing remedy both of soul and body. Who livest and reignest
								with God the Father, in the unity of the Holy Ghost, God, for ever and ever. Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE PRAYERS AT THE COMMUNION</h4>

				<p class="mass-note">He genuflects and taking the Host says silently:</p>

				<h5>The Communion of the Priest</h5>

				<table>
					<tbody>
						<tr>
							<td>Panem cælestem accipiam, et nomen Domini invocabo.</td>
							<td>I will take the Bread of Heaven, and will call upon the Name of the Lord.</td>
						</tr>
					</tbody>
				</table>

				<div class="text-center text-red-lighten-1">
					<v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon><v-icon>mdi-bell-outline</v-icon>
				</div>

				<p class="mass-note">Striking his breast, he says the Domine, non sum dignus three times audibly</p>

				<table>
					<tbody>
						<tr>
							<td>Domine, non sum dignis, ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea.</td>
							<td>Lord, I am not worthy that Thou shouldst enter under my roof; but only say the word, and my soul shall be healed.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Making the Sign of the Cross with the Host over the paten, he says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>Corpus Domini nostri Jesu Christi custodiat animam meam in vitam æternam. Amen.</td>
							<td>May the Body of Our Lord Jesus Christ preserve my soul unto life everlasting. Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">
					He uncovers the Chalice, genuflects, collects any Fragments remaining and purifies the paten over the Chalice, saying silently:
				</p>

				<table>
					<tbody>
						<tr>
							<td>
								Quid retribuam Domino pro omnibus quæ retribuit mihi? Calicem salutaris accipiam, et nomen Domini invocabo. Laudans invocabo Dominum, et
								ab inimicis meis salvus ero.
							</td>
							<td>
								What return shall I make to the Lord for all the things that He hast given unto me? I will take the chalice of salvation, and call upon
								the Name of the Lord. I will call upon the Lord and give praise: and I shall be saved from mine enemies.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He makes the Sign of the Cross with the Chalice, while saying silently:</p>

				<table>
					<tbody>
						<tr>
							<td>Sanguis Domini nostri Jesu Christi custodiat animam meam in vitam æternam. Amen.</td>
							<td>May the Blood of our Lord Jesus Christ preserve my soul unto life everlasting. Amen.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant genuflects, elevates a Particle of the Host, turns toward the faithful and says:</p>

				<h5>The Communion of the Faithful</h5>

				<p class="font-weight-bold">
					Those attending are reminded that only baptized Catholics who are in the state of grace and have observed the fast may receive Holy
					Communion.
				</p>

				<p class="font-weight-bold">Holy Communion is received in the kneeling position and only on the tongue. The communicant does not say Amen.</p>

				<table>
					<tbody>
						<tr>
							<td>Ecce Agnus Dei, ecce qui tollit peccata mundi.</td>
							<td>Behold the Lamb of God, behold Him who taketh away the sins of the world.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Communicants adore the Sacred Host and strike their breasts three times saying:</p>

				<table>
					<tbody>
						<tr>
							<td>Domine, non sum dignis, ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea.</td>
							<td>Lord, I am not worthy that Thou shouldst enter under my roof; but only say the word, and my soul shall be healed.</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">The Celebrant then goes to the Altar rail and says to each communicant:</p>

				<table>
					<tbody>
						<tr>
							<td>Corpus Domini nostri Jesu Christi custodiat animam tuam in vitam æternam. Amen.</td>
							<td>May the Body of Our Lord Jesus Christ preserve your soul unto life everlasting. Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE PRAYERS DURING THE ABLUTIONS</h4>

				<p class="mass-note">Wine is poured into the Chalice; the Celebrant drinks it and says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>Quod ore sumpsimus, Domine, pura mente capiamus: et de munere temporali fiat nobis remedium sempiternum.</td>
							<td>
								Grant, O Lord, that what we have taken with our mouth, we may receive with a pure mind; and that from a temporal gift it may become for
								us an eternal remedy.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">Wine and water are poured into the Chalice over the fingers of the Celebrant, who says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Corpus tuum, Domine, quod sumpsi, et Sanguis, quem potavi, adhæreat visceribus meis: et præsta; ut in me non remaneat scelerum macula,
								quem pura et sancta refecerunt sacramenta: Qui vivis et regnas in sǽcula sæculórum. Amen.
							</td>
							<td>
								May Thy Body, O Lord, which I have received and Thy Blood which I have drunk, cleave to my inmost parts, and grant that no stain of sin
								remain in me, whom these pure and holy Sacraments have refreshed. Who livest and reignest for ever and ever. Amen.
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.communion" class="mass-contain">
				<h4>THE COMMUNION ANTIPHON</h4>

				<p class="mass-note">
					During the distribution of Communion, the choir sings the Communion Antiphon, which is later recited silently by the Celebrant at the right
					side of the Altar.
				</p>
				<h5>{{ mass.communion[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.communion[1] }}</td>
							<td>{{ mass.communion[2] }}</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He returns to the middle of the Altar, kisses the Altar, and then turns to the faithful and says:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
						
						<tr>
							<td>Oremus.</td>
							<td>Let us pray.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section v-if="mass.postcommunion" class="mass-contain">
				<h4>THE POSTCOMMUNION PRAYER</h4>

				<p class="mass-note">The Celebrant goes to the right side of the Altar and sings the Postcommunion:</p>
				<h5>{{ mass.postcommunion[0] }}</h5>

				<table>
					<tbody>
						<tr>
							<td>{{ mass.postcommunion[1] }}</td>
							<td>{{ mass.postcommunion[2] }}</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE DISMISSAL</h4>

				<p class="mass-note">The dismissal is then sung:</p>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Ite, Missa est.</td>
							<td><i>V.</i> Go, the Mass is ended.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Deo, gratis.</td>
							<td><i>R.</i> Thanks be to God.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h4>THE BLESSING</h4>

				<p class="mass-action">Kneel.</p>

				<p class="mass-note">Bowing before the Altar, the Celebrant says silently:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Placeat tibi, sancta Trinitas, obsequium servitutis meæ: et præsta: ut sacrificium, quod oculis tuæ majestatis indignus obtuli, tibi sit
								acceptabile, mihique et omnibus, pro quibus illud obtuli, sit, te miserante, propitiabile. Per Christum Dominum nostrum. Amen.
							</td>
							<td>
								May the tribute of my homage be pleas ing to Thee, O most holy Trinity. Grant that the Sacrifice which I, unworthy as I am, have offered
								in the presence of Thy Majesty, may be acceptable to Thee. Through Thy mercy may it bring forgiveness to me and to all for whom I have
								offered it. Through Christ our Lord. Amen.
							</td>
						</tr>
					</tbody>
				</table>

				<p class="mass-note">He kisses the Altar, and turns, blessing the faithful, saying:</p>

				<table>
					<tbody>
						<tr>
							<td>
								Benedicat vos omnipotens Deus, Pater, et Filius, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> et Spiritus
								Sanctus.
							</td>
							<td>
								May almighty God bless you: the Father, the Son, <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> and the Holy
								Ghost.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i>Amen.</td>
							<td><i>R.</i>Amen.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section class="mass-contain">
				<h4>THE LAST GOSPEL</h4>

				<p class="mass-action">Stand.</p>
				<h5>John 1:1-14</h5>

				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Dominus vobiscum.</td>
							<td><i>V.</i> The Lord be with you.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Et cum spiritu tuo.</td>
							<td><i>R.</i> And with thy spirit.</td>
						</tr>
						
						<tr>
							<td><i>V.</i> <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> Initium Sancti Evangelii secundum Joannem.</td>
							<td>
								<i>V.</i> <v-icon :size="18" class="text-red-lighten-1">mdi-cross-bolnisi</v-icon> The beginning of the holy Gospel according to Saint
								John.
							</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Gloria tibi, Domine.</td>
							<td><i>R.</i> Glory to Thee, O Lord.</td>
						</tr>
						
						<tr>
							<td>
								In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in principio apud Deum. Omnia per ipsum facta sunt: et
								sine ipso factum est nihil quod factum est: in ipso vita erat, et vita erat lux hominum; et lux in tenebris lucet, et tenebræ eam non
								comprehenderunt. Fuit homo • missus a Deo cui nomen erat Joannes. Hic venit in testimonium, ut testimonium perhiberet de lumine, ut
								omnes crederent per illum. Non erat ille lux, sed ut testimonium perhiberet de lumine. Erat lux vera quæ illuminat omnem venientem in
								hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus cum non cognovit. In propria venit, et sui eum non receperunt;
								quotquot autem receperunt eum, dedit eis potestatem filios Dei fieri: his, qui credunt in nomine ejus, qui non ex sanguinibus, neque ex
								voluntate carnis, neque ex voluntate viri, sed ex Deo nati sunt.
							</td>
							<td>
								In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were
								made by Him; and without Him was not any thing made that was made. In Him was life; and the life was the Light of men. And the Light
								shineth in darkness; and the darkness comprehended it not. There was a man sent from God, whose name was John. The same came for a
								witness, to bear witness of the Light, that all men through Him might believe. He was not that Light, but was sent to bear witness of
								that Light. That was the true Light, which lighteth every man that cometh into the world. He was in the world, and the world was made by
								Him, and the world knew Him not. He came unto His own, and His own received Him not. But as many as received Him, to them gave He power
								to become the sons of God, even to them that believe on His Name: Which were born, not of blood, nor of the will of the flesh, nor of
								the will of man, but of God.
							</td>
						</tr>
					</tbody>
				</table>
				
				<p class="mass-action">Genuflect.</p>
				
				<table>
					<tbody>
						<tr class="text-center font-weight-bold">
							<td>ET VERBUM CARO FACTUM EST</td>
							<td>AND THE WORD WAS MADE FLESH</td>
						</tr>
						
						<tr>
							<td>et habitavit in nobis; et vidimus gloriam ejus, gloriam quasi Unigenti a Patre, plenum gratiæ et veritatis.</td>
							<td>and dwelt among us, and we beheld His glory, the glory as it were of the Onlybegotten of the Father, full of grace and truth.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Deo gratis.</td>
							<td><i>R.</i> Thanks be to God.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<v-divider class="mb-6 mt-4"></v-divider>

			<div class="mass-break"></div>

			<section>
				<h3>THE PRAYERS AFTER LOW MASS</h3>

				<p class="mass-note">The Priest, with the faithful, recites the Hail Mary thrice, the Hail Holy Queen, and the St. Michael prayer:</p>

				<h5>Ave Maria</h5>

				<table>
					<tbody>
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
					</tbody>
				</table>

				<h5>Salve Regina</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Salve Regína, mater misericórdiæ; vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Evæ; Ad te suspirámus, geméntes et
								flentes in hac lacrymárum valle. Eia ergo, Advocáta nostra, illos tuos misericórdes óculos ad nos convérte: Et Jesum, benedíctum fructum
								ventris tui, nobis post hoc exsílium osténde. O clemens, O pia, O dulcis Virgo María.
							</td>
							<td>
								Hail, Holy Queen, mother of mercy; hail, our life, our sweetness, and our hope! To thee do we cry, poor banished children of Eve; To
								thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy
								towards us: and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary!
							</td>
						</tr>
						
						<tr>
							<td><i>V.</i> Ora pro nobis, sancta Dei Génitrix.</td>
							<td><i>V.</i> Pray for us, O holy Mother of God.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Ut digni efficiámur promissiónibus Christi.</td>
							<td><i>R.</i> That we may be made worthy of the promises of Christ.</td>
						</tr>
						
						<tr>
							<td>Oremus.</td>
							<td>Let us pray.</td>
						</tr>
						
						<tr>
							<td>
								Deus refugium nostrum et virtus, populum ad te clamantem propitius respice; et intercedente gloriosa et immaculata Virgine Dei Genitrice
								Maria, cum beato Josepho ejus Sponso, ac beatis Apostolis tuis Petro et Paulo, et omnibus Sanctis, quas pro conversione peccatorum, pro
								libertate et exaltatione sanctæ Matris Ecclesiæ, preces effundimus, misericors et benignus exaudi. Per eundem Christum Dominum nostrum.
							</td>
							<td>
								O God, our refuge and our strength, mercifully look down on Thy people who cry to Thee, and through the intercession of the glorious and
								immaculate Virgin Mary, Mother of God, of Saint Joseph her Spouse, of Thy blessed Apostles Peter and Paul, and of all the saints, in
								mercy and goodness hear our prayers for the conversion of sinners, and for the liberty and exultation of our holy Mother the Church.
								Through the same Christ our Lord.
							</td>
						</tr>
					</tbody>
				</table>

				<h5 style="break-before: always">Sancte Michael Archangele</h5>

				<table>
					<tbody>
						<tr>
							<td>
								Sancte Michael Archangele, defende nos in prælio. Contra nequitiam et insidias diaboli esto præsidium. Imperet illi Deus, supplices
								deprecamur. Tuque princeps militiæ cælestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo divina
								virtute in infernum detrude. Amen.
							</td>
							<td>
								Blessed Michael, Archangel, defend us in the hour of conflict; be our safeguard against the wickedness and snares of the devil: may God
								restrain him, we humbly pray; and do thou, O prince of the heavenly host, by the power of God thrust Satan down to hell, and with him,
								the other wicked spirits, who wander through the world for the ruin of souls. Amen.
							</td>
						</tr>
					</tbody>
				</table>
					
				<p class="mass-note">Then is said three times:</p>
				
				<table>
					<tbody>
						<tr>
							<td><i>V.</i> Cor Jesu sacratissimum.</td>
							<td><i>V.</i> Most Sacred Heart of Jesus.</td>
						</tr>
						
						<tr>
							<td><i>R.</i> Miserere nobis.</td>
							<td><i>R.</i> Have mercy on us.</td>
						</tr>
					</tbody>
				</table>
			</section>
		</v-container>

		<div class="mass-break"></div>
	</div>
</template>

<script setup lang="ts">
	import Asperges from "@/components/mass/Asperges.vue";
	import seasons from "@/assets/seasons-short.json";
	import { type Ref, ref, watch, computed } from "vue";
	import { useRoute } from "vue-router";

	const route = useRoute();
	let mass: Ref<any> = ref(null);

	const vidiaquam = computed(() => {
		return mass.value?.season === "eastertide" || mass.value?.season === "ascension" || mass.value?.season === "pentecost";
	});

	function parseRoute() {
		window.scrollTo({ top: 0, behavior: "smooth" });

		import(`@/assets/propers/${route.params.mass}.json`).then((i) => {
			mass.value = i.default;
		});
	}

	function getColor() {
		if (mass.value?.color == "green") return "text-green-darken-2";
		else if (mass.value?.color == "violet") return "text-deep-purple-lighten-1";
		else return "text-white";
	}

	function getClass() {
		if (mass.value.rank == "i") return "First Class";
		else if (mass.value.rank == "ii") return "Second Class";
	}

	parseRoute();

	watch(
		() => route.params,
		async () => parseRoute()
	);
</script>
