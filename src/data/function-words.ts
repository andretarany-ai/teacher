// Словарик для пословного разбора фраз: служебные слова, формы глаголов,
// слова из диалогов, имена и города. Ключ — слово в нижнем регистре.
// Формат строки: "слово|перевод".

const RAW = `
bis|до
wiedersehen|свидания (auf Wiedersehen — до свидания)
geht's|идёт (= geht es; «Wie geht's?» — как дела?)
geht|идёт (gehen)
ist|есть, является (sein, он/она/оно)
bin|есть, являюсь (sein, я)
bist|есть, являешься (sein, ты)
sind|есть, являемся/являются (sein, мы/они/Вы)
seid|есть (sein, вы)
war|был (sein)
waren|были (sein)
warst|ты был (sein)
das|это; артикль ср. рода
der|артикль м. рода; (Dativ/Genitiv) ж. рода
die|артикль ж. рода / мн. числа
den|артикль м. рода (Akkusativ) / мн. ч. (Dativ)
dem|артикль м./ср. рода (Dativ)
des|артикль м./ср. рода (Genitiv)
ein|один, какой-то (м./ср. род)
eine|одна, какая-то (ж. род)
einen|какой-то (м. род, Akkusativ)
einem|какому-то (Dativ)
einer|какой-то (ж. род, Dativ); кто-то один
eines|какого-то (Genitiv)
kein|никакой, не (м./ср. род)
keine|никакая, не; никаких
keinen|никакого (Akkusativ)
keiner|никто
und|и
oder|или
aber|но
auch|тоже, также
nicht|не
ich|я
du|ты
er|он
sie|она; они
es|оно; это
wir|мы
ihr|вы; её; их
mich|меня
dich|тебя
sich|себя, -ся
uns|нас, нам
euch|вас, вам
mir|мне
dir|тебе
ihm|ему
ihn|его
ihnen|им; (Ihnen) Вам
mein|мой
meine|моя, мои
meinen|моего, моим
meinem|моему
meiner|моей; моих
meines|моего (Genitiv)
dein|твой
deine|твоя, твои
deiner|твоей
sein|быть; его (притяж.)
seine|его (притяж., ж. р./мн. ч.)
seiner|его (Dativ/Genitiv)
unser|наш
unsere|наша, наши
unserer|нашей
in|в
im|в (= in dem)
ins|в (= in das, направление)
aus|из
an|у, на (вертикальной поверхности), к
am|у, в (= an dem); в (день)
ans|к (= an das)
auf|на
mit|с
von|от, из, о
vom|от (= von dem)
zu|к; слишком; (с инфинитивом) — частица
zum|к (= zu dem)
zur|к (= zu der)
nach|после; в (город/страну)
um|в (о времени); вокруг
für|для
ohne|без
bei|у, при
beim|у, при (= bei dem)
seit|с (какого-то времени)
durch|через
ab|с (какого-то момента)
pro|в, за (в неделю/в час)
aufs|на (= auf das)
wie|как
was|что
wer|кто
wo|где
woher|откуда
wohin|куда
wann|когда
warum|почему
welche|какая, какие
welchen|какой (Akkusativ)
welchem|каком
wem|кому
wen|кого
woran|о чём
worauf|на что, чего
hier|здесь, вот
da|там; тут; тогда
dort|там
noch|ещё
schon|уже
sehr|очень
so|так, такой
nur|только
viel|много
viele|многие, много
mehr|больше
etwas|что-то; немного
alles|всё
nichts|ничего
gern|охотно (= люблю делать)
lieber|охотнее, лучше
liebsten|(am liebsten) больше всего
einmal|один раз
noch einmal|ещё раз
dann|потом
jetzt|сейчас
heute|сегодня
immer|всегда
oft|часто
ja|да
nein|нет
doch|же; (в ответ) ещё как, да
mal|-ка, разок
also|итак, значит
denn|ведь, потому что; (в вопросе) же
ganz|совсем, весь
gerade|как раз, сейчас
eigentlich|вообще-то, собственно
vielleicht|может быть
wirklich|действительно
genau|точно
klar|ясно, конечно
super|супер
toll|классно
okay|окей
oh|ой
hm|хм
haha|ха-ха
wow|ого
hey|эй, привет
ach|ах
bisschen|немного (ein bisschen)
deutsch|немецкий (язык)
freund|друг
freundin|подруга
freunde|друзья
freut|радует (freuen; «Freut mich!» — очень приятно)
anna|Анна (имя)
max|Макс (имя)
lukas|Лукас (имя)
peter|Петер (имя)
ivan|Иван (имя)
daniel|Даниэль (имя)
lena|Лена (имя)
paul|Пауль (имя)
petrova|Петрова (фамилия)
krause|Краузе (фамилия)
kafka|Кафка (писатель)
klee|Клее (художник)
alexander|Александр (имя)
fleming|Флеминг (фамилия)
berlin|Берлин
münchen|Мюнхен
hamburg|Гамбург
wien|Вена
moskau|Москва
kiew|Киев
dresden|Дрезден
heidelberg|Гейдельберг
nowosibirsk|Новосибирск
paris|Париж
österreich|Австрия
kasachstan|Казахстан
italien|Италия
spanien|Испания
kroatien|Хорватия
schweiz|Швейцария
kanada|Канада
englisch|английский
siemens|Siemens (компания)
null|ноль
nummer|номер
euro|евро
kostet|стоит (kosten)
kosten|стоить; расходы
rufe|звоню (anrufen: rufe … an)
rief|позвонил (anrufen)
dreizehn|тринадцать
sechzehn|шестнадцать
elf|одиннадцать
einundzwanzig|двадцать один
fünfundzwanzig|двадцать пять
achtundzwanzig|двадцать восемь
neunundvierzig|сорок девять
fünfzig|пятьдесят
achtzig|восемьдесят
achthundert|восемьсот
hast|имеешь (haben)
hat|имеет (haben)
habe|имею (haben)
habt|имеете (haben)
hatte|имел (haben)
hatten|имели (haben)
hattest|ты имел (haben)
frau|женщина; госпожа
mann|мужчина; муж
lehrerin|учительница
geschwister|братья и сёстры
gut|хорошо
hunger|голод (Hunger haben — быть голодным)
durst|жажда (Durst haben — хотеть пить)
schmeckt|на вкус (schmecken; «Das schmeckt gut» — это вкусно)
frühstück|завтрак
eier|яйца
appetit|аппетит (Guten Appetit — приятного аппетита)
frisch|свежий
stimmt|верно (stimmen; «Stimmt so!» — сдачи не надо)
macht|делает; (о сумме) составляет
cappuccino|капучино
apfelkuchen|яблочный пирог
gehen|идти
gehe|иду (gehen)
gehst|идёшь (gehen)
kino|кино, кинотеатр
idee|идея
fängt|начинает (anfangen: fängt … an)
sehe|вижу (sehen; fernsehen: sehe … fern)
sehen|видеть
siehst|видишь; (siehst … aus) выглядишь
sieht|видит; (sieht … aus) выглядит
fern|далеко; (fernsehen) смотреть ТВ
kaufe|покупаю (kaufen; einkaufen: kaufe … ein)
kaufen|покупать
machst|делаешь (machen)
machen|делать
mache|делаю (machen)
mach|делай (machen)
kann|могу, может (können)
kannst|можешь (können)
fahre|еду (fahren)
fährt|едет (fahren)
fahren|ехать
gitarre|гитара
rad|велосипед (Rad fahren — кататься на велосипеде)
fahrrad|велосипед
tennis|теннис
bücher|книги
liest|читает (lesen)
gibt|даёт (geben; «es gibt» — есть, имеется)
gab|было, имелось (es gab)
hoch|высокий
neu|новый
neue|новая
neuen|новый (Akk.), новые
neuer|новый
neues|новое
bequem|удобный
dritten|третьем (dritte)
stock|этаж
wohnzimmer|гостиная
modern|современный
nimm|возьми (nehmen)
minuten|минуты
vielen|многим; «Vielen Dank» — большое спасибо
dank|спасибо (Vielen Dank)
entschuldigung|извините
fuß|нога (zu Fuß — пешком)
suche|ищу (suchen)
dieses|этот (ср. род)
dieser|этот (м. род)
diese|эта, эти
diesen|этот (Akk.)
karte|карта; (банковская) карточка
m|M (размер)
kabine|примерочная
farbe|цвет
mantel|пальто
wird|становится; (будущее время) будет
fahren|ехать
ersten|первое (число), первого
fünften|пятое (число)
märz|март
mai|май
august|август
regnet|идёт дождь (regnen)
regnete|шёл дождь
regnen|идти (о дожде)
scheint|светит (scheinen)
schneit|идёт снег (schneien)
geschneit|шёл снег
park|парк
eingang|вход
perfekt|отлично, идеально
picknick|пикник
grad|градус
kurs|курс
beginnt|начинается (beginnen)
muss|должен (müssen)
musst|должен (ты)
man|«мы/люди» (безличное: man sagt — говорят)
woche|неделя
wochen|недели
darf|можно, разрешено (dürfen)
weh|больно (wehtun: tut … weh)
tut|делает; (tut weh) болит
tun|делать; (tun weh) болят
bleiben|оставаться
bleibe|остаюсь
bleibt|остаётся
bleibst|остаёшься
fehlt|не хватает (fehlen; «Was fehlt Ihnen?» — что Вас беспокоит?)
sport|спорт
rauchen|курить
raucht|курит
halsschmerzen|боль в горле
kopfschmerzen|головная боль
dreimal|три раза
täglich|ежедневно
besserung|выздоровление (Gute Besserung — выздоравливай)
grippe|грипп
rezept|рецепт
doktor|доктор
sollst|должен, следует тебе (sollen)
soll|должен (по чьему-то указанию)
sollen|следует, должны
sollten|следовало бы
lange|долго
dein|твой
gearbeitet|работал (arbeiten)
gegrillt|жарил на гриле
geredet|разговаривал (reden)
komödie|комедия
pizza|пицца
fußball|футбол
eingekauft|сделал покупки (einkaufen)
brief|письмо
jeden|каждый (Akk.)
jeder|каждый
auto|машина, автомобиль
autos|машины
gegangen|пошёл, ходил (gehen)
stunden|часы (длительность)
stunde|час
fantastisch|фантастический
geblieben|остался (bleiben)
zurückgekommen|вернулся (zurückkommen)
braun|загорелый; коричневый
gedauert|длился (dauern)
geschwommen|плавал (schwimmen)
heiß|жаркий, горячий
sonnig|солнечный
fotos|фотографии
foto|фото
gefällt|нравится (gefallen)
deiner|твоей
tasche|сумка
verstehe|понимаю (verstehen)
verstehen|понимать
nächste|следующая
nächstes|следующее (nächstes Jahr — в следующем году)
schmuck|украшения
kindern|детям (Kinder, Dativ)
schokolade|шоколад
schenk|подари (schenken)
letztes|прошлый (letztes Jahr)
letzte|прошлая, последняя
spiel|игра
hilft|помогает (helfen)
handy|мобильный телефон
handys|мобильные телефоны
bild|картина
bildes|картины (Genitiv)
kühlschrank|холодильник
katze|кошка
stell|поставь (stellen)
flasche|бутылка
flaschen|бутылки
gefunden|нашёл (finden)
schläft|спит (schlafen)
karton|коробка
häng|повесь (hängen)
hammer|молоток
waschmaschine|стиральная машина
vase|ваза
glaube|верю, думаю (glauben)
glaubst|веришь, думаешь
recht|право; (recht haben) быть правым
mag|нравится, люблю (mögen)
magst|любишь (mögen)
lernen|учить, учиться
lerne|учу (lernen)
job|работа
jobs|рабочие места
sagt|говорит (sagen)
sagen|сказать
nett|милый, приятный
netten|милого, милыми
netter|милый
ingenieurin|инженер (женщина)
programmiererin|программистка
gewechselt|сменил (wechseln)
wechseln|менять
leben|жить; жизнь
lebe|живу
weniger|меньше
denkst|думаешь (denken)
denke|думаю
länger|дольше, длиннее
besten|лучше всего (am besten)
weg|путь, дорога; прочь
brauche|нуждаюсь, мне нужно (brauchen)
brauchen|нуждаться
braucht|нуждается, нужен
höchsten|выше всего (am höchsten)
älter|старше
wollen|хотеть
will|хочу, хочет (wollen)
willst|хочешь
wolltest|ты хотел
ziehen|переезжать; тянуть
ziehe|(ziehe … an) надеваю
zieht|(zieht sich an) одевается
häuser|дома
größer|больше (крупнее)
ice|ICE (скоростной поезд)
schnellsten|быстрее всех (am schnellsten)
freue|радуюсь (sich freuen)
freuen|радоваться
zähne|зубы
dusche|принимаю душ; душ
putze|чищу (putzen)
geputzt|почистил
beeil|поторопись (sich beeilen)
beeilen|торопиться
interessiert|интересуется (sich interessieren)
interessierst|интересуешься
politik|политика
fertig|готов, закончил
los|вперёд! («Los geht's!» — поехали!)
dran|(spät dran sein) опаздывать
treffen|встречаться
ärgere|злюсь (sich ärgern)
lärm|шум
ruhe|(ruhe mich aus) отдыхаю
moment|момент; минутку
ausflug|поездка, экскурсия
wasche|мою, умываю (waschen)
kunst|искусство
trägt|носит (tragen)
spricht|говорит (sprechen)
kurze|короткие
runde|круглая
partner|партнёр
lächeln|улыбка; улыбаться
langen|длинной (lang)
onkel|дядя
typ|тип, парень
typen|парня
cousine|двоюродная сестра
klug|умный
sympathisch|симпатичный
computer|компьютер
jungen|молодой (Dativ); мальчика
junge|мальчик; молодой
junger|молодой
wenn|если, когда (каждый раз)
schule|школа
gebaut|построен (bauen)
üben|упражняться
garten|сад
schüchtern|застенчивый
hund|собака
schneemänner|снеговики
astronaut|космонавт
ungefähr|примерно
süß|милый, сладкий
süßes|милое
draußen|на улице
hühner|куры
tierarzt|ветеринар
drinnen|внутри, дома
klavier|фортепиано
hättest|имел бы (ты) (hätten)
könntest|мог бы (ты)
problem|проблема
probleme|проблемы
mitbringen|принести с собой
herzlichen|сердечные (Herzlichen Glückwunsch — поздравляю)
herzlich|сердечно (Herzlich willkommen — добро пожаловать)
glückwunsch|поздравление
mitkommen|пойти вместе
mitkomme|пойду вместе
frohe|радостные (Frohe Weihnachten — счастливого Рождества)
dreißigsten|тридцатый
schokoladenkuchen|шоколадный торт
lade|приглашаю (einladen: lade … ein)
verlassen|покидать; (sich verlassen auf) полагаться на
jemand|кто-то
leute|люди
denen|которым (Dativ мн. ч.)
beide|оба
zuhört|выслушивает (zuhören)
kennengelernt|познакомился (kennenlernen)
geholfen|помог (helfen)
bester|лучший
kenne|знаю (kennen)
kannten|знали (kennen)
gestritten|ссорились (streiten)
mädchens|девочки (Genitiv)
gewonnen|выиграл (gewinnen)
geheiratet|женился, вышла замуж (heiraten)
sitzt|сидит (sitzen)
nachbarin|соседка
tür|дверь
offen|открытый
armer|бедный
trat|вошёл, шагнул (treten; trat ein)
niemand|никто
niemanden|никого
lachte|засмеялся (lachen)
wort|слово
gestorben|умер (sterben)
blass|бледный
passiert|случилось (passieren)
hörte|услышал (hören)
geräusch|шум, звук
nahm|взял (nehmen)
taschenlampe|фонарик
unten|внизу
stand|стоял (stehen)
glas|стекло; стакан
saß|сидел (sitzen)
wurst|колбаса
wolf|волк
goldenen|золотой
erst|только; сначала
papier|бумага
tonne|бак, контейнер
geworfen|брошен (werfen)
reduziert|сокращён (reduzieren)
reduzieren|сокращать
restmüll|остаточный (несортируемый) мусор
gelbe|жёлтая
container|контейнер
ecke|угол
gebracht|принесён, отнесён (bringen)
pfandflaschen|бутылки с залогом
zurück|назад, обратно
wusste|знал (wissen)
eingezogen|въехал (einziehen)
abgeholt|забран, вывезен (abholen)
gesammelt|собран (sammeln)
bäume|деревья
gepflanzt|посажен (pflanzen)
bio-produkte|био-продукты
verkauft|продаётся, продан (verkaufen)
würdest|бы (ты) (würde)
gewusst|знал (wissen)
geld|деньги
wünschte|хотел бы, желал (wünschen)
lotto|лотерея
gewinnen|выигрывать
gewinnst|выигрываешь
million|миллион
zuerst|сначала
übrig|оставшийся (übrig sein — оставаться)
eröffnen|открыть (кафе, магазин)
besuchen|навестить, посетить
einfacher|проще
wüsste|знал бы (wissen)
leicht|лёгкий, легко
alle|все
schaffen|справиться, успеть; создать
vergessen|забыть
anrufen|позвонить
chancen|шансы
vorgenommen|наметил, решил (sich vornehmen)
app|приложение
praxis|практика
studieren|учиться в вузе
beschlossen|решил (beschließen)
aufzuhören|прекратить (aufhören)
aufzustehen|вставать (aufstehen)
erkläre|объясняю (erklären)
erklären|объяснить
b1-test|экзамен B1
wortschatz|словарный запас
verbessern|улучшить
abgemacht|договорились
abzuschließen|запереть (abschließen)
wichtig|важно
pausen|перерывы
pause|перерыв
bestätigung|подтверждение
einfach|просто
warten|ждать
warte|жду; подожди
wartest|ждёшь
innerhalb|в течение
monats|месяца (Genitiv)
pass|паспорт
spazieren|гулять (spazieren gehen)
füllen|заполнять (ausfüllen: füllen … aus)
streiks|забастовки (Genitiv)
geschlossen|закрыт (schließen)
wartezeit|время ожидания
umgezogen|переехал (umziehen)
wohnungsgeberbestätigung|подтверждение от арендодателя
dabei|при себе, с собой
vermieters|арендодателя (Genitiv)
dafür|для этого
einzug|въезд
kälte|холод
gelernt|учил, выучил (lernen)
abgeschlossen|окончил (abschließen)
stipendium|стипендия
beworben|подал заявку (sich bewerben)
licht|свет
beendet|закончил (beenden)
studierte|учился (studieren)
informatik|информатика
berufserfahrung|опыт работы
marketing|маркетинг
gejobbt|подрабатывал (jobben)
bekam|получил (bekommen)
vorher|до этого, заранее
intensivkurs|интенсивный курс
mehreren|нескольких
firmen|фирмы
datenanalyst|аналитик данных
angekommen|прибыл (ankommen)
fühle|чувствую (fühlen)
wissen|знать
fragen|спрашивать
fragte|спросил
frage|вопрос; спрашиваю
erzählen|рассказывать
team|команда
möglich|возможно
personen|человек (лиц)
dauert|длится (dauern)
weiterbildungsmöglichkeiten|возможности повышения квалификации
melden|сообщать; (sich melden) связаться
willkommen|добро пожаловать
kurz|коротко
projektmanagerin|менеджер проектов
it-branche|IT-отрасль
abfährt|отправляется (abfahren)
büro|офис
finde|нахожу, считаю (finden)
soziale|социальные
praktisch|практичный, удобный
völlig|полностью
anders|иначе
einerseits|с одной стороны
andererseits|с другой стороны
benutzen|пользоваться
benutzt|использовал
verbot|запрет
klare|чёткие
regeln|правила
schlecht|плохо
falsch|неправильно
medien|медиа, СМИ
wenig|мало
verboten|запрещено
lenken|(lenken ab) отвлекают
schüler|ученики
lösung|решение
schlägst|(schlägst vor) предлагаешь (vorschlagen)
unterricht|урок, занятия
gewandert|ходили в поход (wandern)
kaum|едва ли, почти не
preise|цены
selbst|сам, сами
wohl|наверное
welt|мир
steigen|расти, подниматься
gestiegen|выросли (steigen)
master|магистратура
stau|пробка
verspreche|обещаю (versprechen)
versprochen|обещано
stark|сильно
verändern|менять; (sich verändern) меняться
übernehmen|взять на себя, занять
manche|некоторые
hoffe|надеюсь (hoffen)
wirst|будешь (werden)
lässt|позволяет; (lässt sich) можно
ließ|(ließ sich) удалось/можно было
davon|об этом, от этого
worden|(пассив) был (… worden)
getestet|протестирован
bekannt|известный
fenster|окно
daten|данные
penizillin|пенициллин
ergebnisse|результаты
impfstoff|вакцина
gründlich|тщательно
lösen|решать
lösende|которую нужно решить (zu lösende)
wissenschaftlich|научно
nachgewiesen|доказан (nachweisen)
beantworten|отвечать на
bald|скоро
material|материал
algen|водоросли
hergestellt|изготовлен (herstellen)
allerdings|правда, однако
markt|рынок
produktion|производство
klingt|звучит (klingen)
echten|настоящий
gebäude|здание
geöffnet|открыт (öffnen)
öffnen|открывать
erledigen|выполнить, сделать
geprüft|проверен (prüfen)
sei|(Konjunktiv I от sein) якобы является, был бы
seien|(Konjunktiv I) являются
lage|положение, ситуация
kontrolle|контроль
ministerin|министр (женщина)
getan|сделано (tun)
polizei|полиция
verletzten|пострадавшие, раненые
behauptete|утверждал (behaupten)
teilte|(teilte mit) сообщила (mitteilen)
journalistin|журналистка
steuern|налоги
angaben|данные, сведения
prozent|процент
bürgermeister|мэр
zurückgetreten|ушёл в отставку (zurücktreten)
grund|причина
stadtkasse|городская казна
bestätigt|подтверждено
gerücht|слух
vorwürfe|обвинения
offizielle|официальные
informationen|информация
erklärte|объяснила
meinte|считал (meinen)
projekt|проект
projekts|проекта
verfügung|распоряжение (zur Verfügung stehen — быть в распоряжении)
erhalten|получать
hohen|высокого
nachfrage|спрос
verlängern|продлевать
angebot|предложение
qualität|качество
führen|(führen … ein) вводим (einführen)
einführen|ввести
tests|тесты
anfrage|запрос
folgendes|следующее
mitteilen|сообщить
eingereicht|подан (einreichen)
intensiver|интенсивных
einigung|соглашение
zustande|(zustande kommen) состояться, быть достигнутым
apparat|аппарат («am Apparat» — у телефона)
lieferengpasses|перебоев с поставками
verzögert|(sich verzögern) задерживается
projektstart|старт проекта
ende|конец
schicke|пришлю (schicken)
klärung|прояснение
aller|всех
details|детали
fällt|(fällt aus) отменяется (ausfallen)
verspätung|опоздание
service|сервис
feedback|отзыв
beginn|начало
sitzung|заседание
ausschalten|выключить
machte|сделал (machen)
fehler|ошибка
beeindruckt|впечатлил (beeindrucken)
besonders|особенно
darüber|об этом
erschienene|вышедший (erscheinen)
gilt|считается (gelten)
meisterwerk|шедевр
eröffnete|открывшаяся
zeigt|показывает (zeigen)
hauptfigur|главный герой
ständig|постоянно
zweifelnder|сомневающийся
schlafende|спящая
dar|(stellt … dar) изображает (darstellen)
sprache|язык
kritikern|критиками
gelobtes|хвалимый, расхваленный (loben)
klärenden|(zu klärenden) которые нужно прояснить
besprechen|обсуждать
tief|глубоко
hängende|висящая
tanzenden|танцующей
farben|цвета, краски
unglaublich|невероятно
wusstest|знал ли ты (wissen)
tod|смерть
ungeklärte|не выясненная
faszinierend|завораживающий
unbedingt|обязательно
lachende|смеющийся
geschlossene|закрытая
steigenden|растущих
gestohlene|украденная
schwer|трудный, тяжёлый
geschriebenes|написанная
je|чем (je … desto)
sowohl|как (sowohl … als auch)
weder|ни (weder … noch)
zwar|хотя (zwar … aber)
desto|тем (je … desto)
umso|тем (je … umso)
entweder|либо (entweder … oder)
sondern|а, но (после отрицания)
als|чем; когда (в прошлом); в качестве
sinnvoll|разумный
handeln|действовать
schwierig|сложный
nahverkehr|общественный транспорт
einzelne|отдельный (человек)
alkohol|алкоголь
betrifft|касается (betreffen)
arme|бедные
länder|страны
langfristig|в долгосрочной перспективе
geringer|ниже, меньше
komplizierter|сложнее
thema|тема
wächst|растёт (wachsen)
weltweit|во всём мире
zentrum|центр
autofrei|без машин
hältst|(hältst … davon) думаешь об этом (halten von)
lebensqualität|качество жизни
busverbindung|автобусное сообщение
eben|просто, именно
investieren|инвестировать
nervöser|нервнее
gemütlich|уютный
hausmeister|завхоз, дворник
direktorin|директор (женщина)
gärtner|садовник
unfall|несчастный случай
ausland|заграница
geflohen|сбежал (fliehen)
deuten|(deuten auf … hin) указывают на
hin|туда; (hindeuten) указывать
verhaften|арестовать
ganze|весь, целый
spielschulden|карточные долги
motiv|мотив
brennt|горит (brennen)
dieb|вор
daran|об этом, на этом
verliebt|влюблён (sich verlieben)
angst|страх (Angst haben — бояться)
davor|перед этим; этого (Angst davor)
blick|взгляд
ärgerst|злишься (sich ärgern)
wiederzusehen|снова увидеть
allein|один, в одиночестве
kümmert|заботится (sich kümmern)
kümmere|позабочусь, займусь
liebevoll|с любовью
sehne|тоскую (sich sehnen)
heimat|родина
gespräch|разговор
wirkst|выглядишь, кажешься (wirken)
nachdenklich|задумчивый
kaputt|сломанный (kaputt machen — разрушить)
rede|говори (reden)
darum|об этом; поэтому
spinnen|пауки
ansicht|мнение, взгляд
wichtiger|важнее
allem|(vor allem) прежде всего
bequemlichkeit|удобство
online|онлайн
preisgeben|раскрывать, выдавать
apps|приложения
sammeln|собирать
algorithmen|алгоритмы
neutral|нейтральный
installiert|установил (installieren)
risiken|риски
birgt|несёт в себе (bergen)
netzwerke|сети
erlaubt|разрешено
altersgrenze|возрастное ограничение
begründen|обосновать
jugendliche|подростки
kontrollieren|контролировать
längst|давно
sichere|надёжная
altersprüfung|проверка возраста
schutz|защита
totale|полная, тотальная
freiheit|свобода
aufgestanden|встал (aufstehen)
wärst|был бы (ты)
skeptisch|скептический
wahl|выбор
`;

export const FUNC_WORDS: Record<string, string> = Object.fromEntries(
  RAW.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const i = l.indexOf('|');
    return [l.slice(0, i).toLowerCase(), l.slice(i + 1)];
  }),
);

/** Устойчивые выражения: их смысл не складывается из отдельных слов */
export const PHRASE_IDIOMS: { de: string; ru: string }[] = [
  { de: "Wie geht's", ru: 'как дела? (букв. «как идёт?»)' },
  { de: 'Wie geht es', ru: 'как дела / как поживаете' },
  { de: 'Freut mich', ru: 'очень приятно (при знакомстве)' },
  { de: 'Auf Wiedersehen', ru: 'до свидания' },
  { de: 'Bis morgen', ru: 'до завтра' },
  { de: 'Gute Nacht', ru: 'спокойной ночи' },
  { de: 'Danke schön', ru: 'большое спасибо' },
  { de: 'Vielen Dank', ru: 'большое спасибо' },
  { de: 'Guten Appetit', ru: 'приятного аппетита' },
  { de: 'Stimmt so', ru: 'сдачи не надо' },
  { de: 'Das macht', ru: 'с вас (о сумме)' },
  { de: 'Wie spät ist es', ru: 'который час?' },
  { de: 'es gibt', ru: 'есть, имеется' },
  { de: 'gibt es', ru: 'есть ли, имеется' },
  { de: 'zu Fuß', ru: 'пешком' },
  { de: 'tut weh', ru: 'болит' },
  { de: 'tun weh', ru: 'болят' },
  { de: 'Was fehlt Ihnen', ru: 'что Вас беспокоит?' },
  { de: 'Gute Besserung', ru: 'выздоравливай(те)' },
  { de: 'Hunger haben', ru: 'быть голодным' },
  { de: 'habe Hunger', ru: 'я голоден' },
  { de: 'habe Durst', ru: 'хочу пить' },
  { de: 'Rad fahren', ru: 'кататься на велосипеде' },
  { de: 'fahre Rad', ru: 'катаюсь на велосипеде' },
  { de: 'am liebsten', ru: 'больше всего (люблю)' },
  { de: 'von Beruf', ru: 'по профессии' },
  { de: 'spät dran', ru: 'опаздываем' },
  { de: "Los geht's", ru: 'поехали!' },
  { de: 'recht', ru: '' },
  { de: 'recht haben', ru: 'быть правым' },
  { de: 'hast recht', ru: 'ты прав' },
  { de: 'Herzlichen Glückwunsch', ru: 'поздравляю!' },
  { de: 'Alles Gute', ru: 'всего хорошего; (zum Geburtstag) с днём рождения' },
  { de: 'kein Problem', ru: 'без проблем' },
  { de: 'Lust', ru: '' },
  { de: 'Hättest du Lust', ru: 'не хочешь ли ты…? (есть ли у тебя желание)' },
  { de: 'Es war einmal', ru: 'жил-был (начало сказки)' },
  { de: 'eines Tages', ru: 'однажды' },
  { de: 'an deiner Stelle', ru: 'на твоём месте' },
  { de: 'Meiner Meinung nach', ru: 'по моему мнению' },
  { de: 'zur Verfügung', ru: 'в распоряжении (стоять к услугам)' },
  { de: 'kam keine Einigung zustande', ru: 'соглашение не было достигнуто' },
  { de: 'am Apparat', ru: 'у телефона' },
  { de: 'vor allem', ru: 'прежде всего' },
  { de: 'auf den ersten Blick', ru: 'с первого взгляда' },
  { de: 'Das liegt daran', ru: 'это связано с тем' },
  { de: 'Was hältst du davon', ru: 'что ты об этом думаешь?' },
  { de: 'im Lotto gewinnen', ru: 'выиграть в лотерею' },
  { de: 'ins Kino', ru: 'в кино' },
  { de: 'zu Hause', ru: 'дома' },
  { de: 'nach Hause', ru: 'домой' },
  { de: 'Was ist passiert', ru: 'что случилось?' },
  { de: 'Ich auch', ru: 'я тоже' },
  { de: 'Und du', ru: 'а ты?' },
  { de: 'Und Sie', ru: 'а Вы?' },
].filter((x) => x.ru);
