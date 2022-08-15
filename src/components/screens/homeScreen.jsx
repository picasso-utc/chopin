import React from 'react';
import { ScrollView } from 'react-native';

import News from '../molecules/news';

function HomeScreen() {
    return (
        <ScrollView
            style={{
                backgroundColor: '#000223',
                flex: 1,
            }}
            contentContainerStyle={{
                alignItems: 'center',
            }}
            scrollEnabled={true}
        >
            <News
                latest={true}
                name="PERM HALLOWEEN"
                linkimg={require('../../../assets/placeholderLatestNews.png')}
                content="Exsistit autem hoc loco quaedam quaestio subdifficilis, num quando amici novi, digni amicitia, veteribus sint anteponendi, ut equis vetulis teneros anteponere solemus. Indigna homine dubitatio! Non enim debent esse amicitiarum sicut aliarum rerum satietates; veterrima quaeque, ut ea vina, quae vetustatem ferunt, esse debet suavissima; verumque illud est, quod dicitur, multos modios salis simul edendos esse, ut amicitiae munus expletum sit.Post hanc adclinis Libano monti Phoenice, regio plena gratiarum et venustatis, urbibus decorata magnis et pulchris; in quibus amoenitate celebritateque nominum Tyros excellit, Sidon et Berytus isdemque pares Emissa et Damascus saeculis condita priscis.Itaque verae amictiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte."
            />
            <News
                latest={false}
                name="ETUVILLE"
                linkimg={require('../../../assets/placeholderNews1.png')}
                content="Le Pic sera fermé à Etuville frère on veut aller au Parc Astérix aussi hein ça va être bad lourd pour une fois on profitera sans servir des bières là..."
            />
        </ScrollView>
    );
}

export default HomeScreen;
