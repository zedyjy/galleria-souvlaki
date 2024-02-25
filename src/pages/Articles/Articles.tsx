import React, {useEffect, useState} from 'react';
import Navbar from '../../ui/Navbar/Navbar';
import './Articles.css';

interface Article {
    id: number;
    author: string;
    title: string;
    content: string;
    summary: string;
    imageUrl: string;
}

const articles: Article[] = [
    {
        id: 1,
        author: 'Zeynep Dellal',
        title: 'Hamiyet Müzikali: ★★★★',
        content: 'Hamiyet Müzikali’ne gelmeden sosyal medyada gördüğüm kliplerden ve Peyk’i uzuuun bir süredir dinlediğimden çok heyecanlıydım ve beklentilerim çok yüksekti. Oyun başlar başlamaz gözlerim doldu ve inanılmaz bir hisse kapıldım. Tabii ki tuttum kendimi, kızım daha oyunun 3. Dakikasından ağlanır mı diye. Böyle hızlı ve güçlü başlayınca tabii ki beklentilerim çok daha arttı. Diyaloglar başlayınca seyirciye ne aktarılmak istendiği anlaşılsa da ben zayıf buldum. Müzikal kısmı ile diyalog kısımlarındaki kontrast o kadar fazlaydı ki artık şarkılar gelsin diye dua ettiğim oldu. Anlaşılacağı üzere diyaloglar akıcı değildi ve şarkıların verdiği ağır hissi veremedi. Tekrar tekrar “patron” karakterinin ne kadar vicdansız ve aşağılık biri olduğunu görmek biraz içimi baydı. Herhalde bu izleyici kitlesinde sendikalara karşı olan, kapitalist patron tiplemesinin aşağılık biri olduğunu anlamayacak kimse yoktur. Diyalog eleştirilerimi kısa kesiyorum ancak kesinlikle geliştirilebileceğini düşünüyorum. Birkaç kısımda şarkı ile hikâyeyi nasıl bağlayacakları konusunda zorlandıklarını sezdim, çünkü bazı şarkılara girişler bana ani ve alakasız geldi. Yine de buna diyecek bir sözüm yok.\n' +
            'Biraz iyi kısımlarından bahsedeyim. Bırakın Türkiye’yi, dünyada orijinal senaryoların bu kadar az çıktığı bir dönemde farklı bir şeyler yaratabilmiş olmak benim gözümde çok önemli. Darbeye farklı bir gözle bakıp; yeni, hayatın içinden bir açı bulup duygu sömürüsü olmadan, bazen seyirciyi yükselterek bazen de mahvederek ama hiç bırakmadan anlatılan hikâye inanılmazdı. Karakterlerin hiçbiri tek boyutlu değildi, hepsi derinlikli, belli ki üstlerine çok düşünülmüş, karakter analizi yapılmıştı. Hafif muhafazakâr en yakın arkadaş Seher, beni gammazladığını ben duymadım sen söylemedin diyen Hasan, gerçekleri tam göremediği halde annesini perişan eden genç kız, hepsi çok gerçekçi iyi yaratılmışlardı. Hamiyet’in karakter analizini yapacak yetkinlikte olduğumu düşünmüyorum, eğer bir psikolog olsaydım birkaç eleştiri noktası bulabilirdim belki ancak bana dört dörtlük geldi. Hikâyenin en beğendiğim kısımlarından biri tavuk kanadı ve etin üzerine yüklen anlamdı. Polis şiddetini polis göstermeden aktarmaları da takdire şayandı. \n' +
            'Hamiyet’in kendisine bir “indie rock band”in yardımcı olduğunu, onun yanında olduklarını hissettirmesi belki de hikâyenin yaratıcısı tarafından kendi çapında adaleti yerine getirme ve Hamiyet’e karşı olan mahcupluğunu giderme açısından yapılmış bir hareketti. Kökeni ne olursa olsun, Hamiyet’in kendisini yalnız hissetmemesi seyirci için de bir teselliydi. En sonunda 4. duvarın yıkıldığı ve İrfan Bey’in Hamiyet ile dertleştiği bölüm beni mahvetti, duvarlardan duvarlara attı, bu konuda objektif yaklaşamayacağım. Denizdeyim şarkısını dümdüz dinlerken ağlayan bir olarak, oyun o kadar güçlü bitti ki, oyun sırasındaki eleştirilerim, ilk paragrafta yazdığım anekdotlar anlamını yitirdiler.\n' +
            'Aslı İnandık’ı ilk Vine yaptığı zamanlardan beri izleyen biri olarak, onu Hamiyet halinde izlemek o kadar keyifliydi ki, sanki çok sevdiğim bir arkadaşım çok başarılı olmuş ve tam potansiyeline ulaşmış gibi hissettim. Şarkılara, Peyk’e bir yorum yapmanın gerekli olduğunu düşünmüyorum, beklediğimden fazlasını sundular ve hayranlıkla izledim. \n' +
            'Sonuç olarak orijinal ve çok iyi bir iş çıkarmışlar. Törpülenmesi gereken kısımlar olduğunu hala düşünüyorum ancak bu eleştiriler Hamiyet Müzikali’nin kalitesini eksiltmiyor.\n',
        summary: '80 darbesinden sonra kadın, anne ve işçi rolleriyle mücadele eden Hamiyet\'i anlatan Hamiyet Müzikali\'nin bir eleştirisi.',
        imageUrl: '/galleria-souvlaki/hamiyet/hamiyet.jpg\'', // Example image URL
    },
    // Add more articles as needed
];

function ArticleList(){

    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const handleArticleClick = (article: Article) => {
        setSelectedArticle(article);
    };

    const handleGoBack = () => {
        setSelectedArticle(null);
    };

    useEffect(() => {
        console.log("Articles component rendered");
        // ... rest of your code
    }, []);

    return (
        <div>
            {selectedArticle ? (
                // Full Article View
                <div className="full-article">
                    <h2>{selectedArticle.title}</h2>
                    <p>Author: {selectedArticle.author}</p>
                    <img src={selectedArticle.imageUrl} alt={selectedArticle.title} />
                    <p>{selectedArticle.content}</p>
                    <button onClick={handleGoBack}>Go Back</button>
                </div>
            ) : (
                // Article Previews List View
                <div className="acontainer">
                    <h1>Editorials</h1>
                    <ul>
                        {articles.map((article) => (
                            <li key={article.id} onClick={() => handleArticleClick(article)}>
                                <h3>{article.title}</h3>
                                <p>Author: {article.author}</p>
                                <img src={article.imageUrl} alt={article.title} />
                                <p>{article.summary}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

};

export default ArticleList;
