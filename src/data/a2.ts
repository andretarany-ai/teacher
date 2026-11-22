import type { LessonSrc } from './types';

export const A2: LessonSrc[] = [
{
  id: 'a2-01', emoji: '🎉', title: 'Что ты делал в выходные?', de: 'Was hast du am Wochenende gemacht?',
  goal: 'Рассказывать о прошлом в разговорном времени Perfekt (с haben)',
  grammar: {
    title: 'Perfekt с haben',
    points: [
      'В разговоре о прошлом немцы используют **Perfekt**: haben (на 2-м месте) + **Partizip II** (в конце): Ich **habe** Pizza **gegessen**.',
      'Слабые (правильные) глаголы: **ge- + основа + -t**: machen → **gemacht**, kaufen → **gekauft**, spielen → **gespielt**, arbeiten → **gearbeitet**.',
      'Сильные глаголы: **ge- + (изм.) основа + -en**: essen → **gegessen**, trinken → **getrunken**, sehen → **gesehen**, lesen → **gelesen**, schreiben → **geschrieben**.',
      'Глаголы на **-ieren** и с неотделяемыми приставками (be-, ver-, er-) — **без ge-**: telefoniert, besucht, verkauft.',
      'Отделяемые приставки: ge- в середину: einkaufen → ein**ge**kauft, fernsehen → fern**ge**sehen.',
    ],
    table: [
      ['Инфинитив', 'Partizip II'],
      ['machen', 'gemacht'],
      ['essen', 'gegessen'],
      ['trinken', 'getrunken'],
      ['sehen', 'gesehen'],
      ['besuchen', 'besucht'],
      ['einkaufen', 'eingekauft'],
    ],
  },
  words: `
gemacht|сделал (machen)
gegessen|съел (essen)
getrunken|выпил (trinken)
gesehen|видел (sehen)
gelesen|прочитал (lesen)
geschrieben|написал (schreiben)
gekauft|купил (kaufen)
besucht|посетил (besuchen)
geschlafen|спал (schlafen)
getroffen|встретил (treffen)
gestern|вчера
letzte Woche|на прошлой неделе
die Party, -s|вечеринка
das Konzert, -e|концерт
`,
  phrases: `
Was hast du am Wochenende gemacht?|Что ты делал на выходных?
Ich habe meine Oma besucht.|Я навестил бабушку.
Wir haben zusammen gekocht.|Мы вместе готовили.
Ich habe einen Film gesehen.|Я посмотрел фильм.
Am Samstag habe ich lange geschlafen.|В субботу я долго спал.
Hast du schon gegessen?|Ты уже поел?
Gestern habe ich Freunde getroffen.|Вчера я встретил друзей.
Ich habe ein Buch gelesen und Musik gehört.|Я читал книгу и слушал музыку.
`,
  gaps: `
Ich habe Pizza {gegessen}.|Я ел пиццу.|gegessen,geesst,essen
Wir haben Fußball {gespielt}.|Мы играли в футбол.|gespielt,gespielen,spielt
Was {hast} du gestern gemacht?|Что ты делал вчера?|hast,bist,habt
Sie hat ihre Freundin {besucht}.|Она навестила подругу.|besucht,gebesucht,besuchen
Ich habe im Supermarkt {eingekauft}.|Я сделал покупки в супермаркете.|eingekauft,geeinkauft,einkauft
Er hat einen Brief {geschrieben}.|Он написал письмо.|geschrieben,geschreibt,schreiben
`,
  dialogTitle: 'Понедельник в офисе',
  dialog: `
A:Hallo! Wie war dein Wochenende?|Привет! Как прошли выходные?
B:Super! Ich habe meine Eltern besucht.|Супер! Я навестил родителей.
A:Schön! Was habt ihr gemacht?|Здорово! Что вы делали?
B:Wir haben gegrillt und viel geredet. Und du?|Мы жарили гриль и много разговаривали. А ты?
A:Ich habe am Samstag gearbeitet und am Sonntag einen Film gesehen.|Я в субботу работал, а в воскресенье смотрел фильм.
B:Welchen Film hast du gesehen?|Какой фильм ты смотрел?
A:Eine Komödie. Sie war sehr lustig!|Комедию. Очень смешная!
`,
  roleplay: { role: 'коллега по работе Markus в понедельник утром у кофемашины', situation: 'Понедельник, офис, коллега спрашивает о выходных.', goal: 'Рассказать 3–4 предложениями в Perfekt, что вы делали, и спросить коллегу' },
},
{
  id: 'a2-02', emoji: '✈️', title: 'Путешествия', de: 'Reisen',
  goal: 'Рассказывать о поездках: Perfekt с sein, предлоги направления',
  grammar: {
    title: 'Perfekt с sein',
    points: [
      'С **sein** образуют Perfekt глаголы **движения** и **смены состояния**: fahren, fliegen, gehen, kommen, laufen, reisen, aufstehen, einschlafen, werden… и сами **sein** и **bleiben**.',
      'Ich **bin** nach Spanien **geflogen**. Wir **sind** am Strand **gewesen**. Er **ist** zu Hause **geblieben**.',
      'Куда? **nach** + города/страны без артикля (nach Berlin, nach Italien); **in die** + страны с артиклем (in die Schweiz, in die Türkei); **an den** Strand / **ans** Meer; **in die** Berge.',
    ],
    table: [
      ['Инфинитив', 'Perfekt'],
      ['fahren', 'ist gefahren'],
      ['fliegen', 'ist geflogen'],
      ['gehen', 'ist gegangen'],
      ['kommen', 'ist gekommen'],
      ['sein', 'ist gewesen'],
      ['bleiben', 'ist geblieben'],
    ],
  },
  words: `
die Reise, -n|путешествие
der Urlaub, -e|отпуск
das Flugzeug, -e|самолёт
der Zug, -¨e|поезд
das Hotel, -s|отель
der Koffer, -|чемодан
das Meer, -e|море
der Strand, -¨e|пляж
die Berge|горы
das Ticket, -s|билет
fliegen|лететь
reisen|путешествовать
übernachten|ночевать
geflogen|летал (fliegen)
gefahren|ехал (fahren)
gewesen|был (sein)
`,
  phrases: `
Wo bist du im Urlaub gewesen?|Где ты был в отпуске?
Ich bin nach Italien geflogen.|Я летал в Италию.
Wir sind mit dem Zug gefahren.|Мы ехали на поезде.
Wir haben in einem kleinen Hotel übernachtet.|Мы ночевали в маленьком отеле.
Ich bin jeden Tag ans Meer gegangen.|Я каждый день ходил к морю.
Das Wetter war fantastisch.|Погода была фантастическая.
Er ist zu Hause geblieben.|Он остался дома.
Wann bist du zurückgekommen?|Когда ты вернулся?
`,
  gaps: `
Ich {bin} nach Spanien geflogen.|Я летал в Испанию.|bin,habe,war
Wir {haben} viele Fotos gemacht.|Мы сделали много фото.|haben,sind,hatten
Sie ist mit dem Zug {gefahren}.|Она ехала на поезде.|gefahren,gefährt,fahren
Wir fahren {in die} Schweiz.|Мы едем в Швейцарию.|in die,nach,zu
Ich fliege {nach} Wien.|Я лечу в Вену.|nach,in,zu
Bist du schon in Paris {gewesen}?|Ты уже был в Париже?|gewesen,geseint,war
`,
  dialogTitle: 'После отпуска',
  dialog: `
A:Du bist so braun! Wo bist du gewesen?|Ты такой загорелый! Где ты был?
B:Ich bin nach Kroatien gefahren.|Я ездил в Хорватию.
A:Toll! Bist du geflogen?|Здорово! Ты летел?
B:Nein, ich bin mit dem Auto gefahren. Das hat zwölf Stunden gedauert.|Нет, ехал на машине. Это заняло двенадцать часов.
A:Wow! Und was hast du dort gemacht?|Ого! А что ты там делал?
B:Ich bin jeden Tag geschwommen und habe viel Fisch gegessen.|Я каждый день плавал и ел много рыбы.
A:Wie war das Wetter?|Какая была погода?
B:Heiß und sonnig – perfekt!|Жарко и солнечно — идеально!
`,
  roleplay: { role: 'старый друг Paul, который давно вас не видел', situation: 'Вы вернулись из путешествия и встретили друга в кафе.', goal: 'Рассказать, куда и на чём вы ездили, где жили и что понравилось (Perfekt с sein и haben)' },
},
{
  id: 'a2-03', emoji: '🎁', title: 'Подарки', de: 'Geschenke',
  goal: 'Говорить кому что дарить: дательный падеж (Dativ)',
  grammar: {
    title: 'Dativ — «кому?»',
    points: [
      'Dativ отвечает на вопрос **wem?** (кому?): Ich schenke **meinem Vater** ein Buch.',
      'Артикли в Dativ: der → **dem**, die → **der**, das → **dem**, мн. ч. → **den** (+ **-n** у существительного: den Kinder**n**).',
      'Местоимения: ich → **mir**, du → **dir**, er → **ihm**, sie → **ihr**, wir → **uns**, ihr → **euch**, Sie → **Ihnen**.',
      'Глаголы с Dativ: **geben, schenken, helfen, danken, gefallen** (нравиться), **gehören** (принадлежать), **schmecken**: Das Kleid **gefällt mir**.',
    ],
    table: [
      ['', 'Nominativ', 'Dativ'],
      ['der', 'der Mann', 'dem Mann'],
      ['die', 'die Frau', 'der Frau'],
      ['das', 'das Kind', 'dem Kind'],
      ['мн. ч.', 'die Leute', 'den Leuten'],
    ],
  },
  words: `
das Geschenk, -e|подарок
der Geburtstag, -e|день рождения
schenken|дарить
geben|давать
helfen|помогать
gefallen|нравиться
gehören|принадлежать
danken|благодарить
die Blume, -n|цветок
die Kette, -n|цепочка
die Uhr, -en|часы
der Gutschein, -e|подарочный сертификат
mir|мне
dir|тебе
ihm|ему
ihr|ей
`,
  phrases: `
Was schenkst du deiner Mutter?|Что ты подаришь маме?
Ich schenke ihr Blumen.|Я подарю ей цветы.
Kannst du mir helfen?|Можешь мне помочь?
Das Geschenk gefällt mir sehr!|Подарок мне очень нравится!
Wem gehört diese Tasche?|Чья это сумка?
Die Tasche gehört mir.|Сумка моя.
Ich gebe dem Kind einen Apfel.|Я даю ребёнку яблоко.
Alles Gute zum Geburtstag!|С днём рождения!
`,
  gaps: `
Ich schenke {meinem} Bruder ein Spiel.|Я дарю брату игру.|meinem,meinen,meiner
Er hilft {der} Frau.|Он помогает женщине.|der,die,dem
Das Kleid gefällt {mir}.|Мне нравится платье.|mir,mich,ich
Kannst du {ihm} helfen?|Ты можешь ему помочь?|ihm,ihn,er
Wir danken {Ihnen}!|Мы благодарим Вас!|Ihnen,Sie,Ihr
Ich gebe {den} Kindern Schokolade.|Я даю детям шоколад.|den,die,der
`,
  dialogTitle: 'Подарок для мамы',
  dialog: `
A:Nächste Woche hat meine Mutter Geburtstag. Was soll ich ihr schenken?|На следующей неделе у мамы день рождения. Что ей подарить?
B:Schenk ihr doch Blumen!|Подари ей цветы!
A:Blumen habe ich ihr letztes Jahr geschenkt.|Цветы я дарил ей в прошлом году.
B:Und eine Kette? Schmuck gefällt ihr bestimmt.|А цепочку? Украшения ей точно понравятся.
A:Gute Idee! Kannst du mir helfen? Ich verstehe nichts von Schmuck.|Хорошая идея! Поможешь мне? Я ничего не понимаю в украшениях.
B:Klar, ich helfe dir gern. Gehen wir am Samstag zusammen einkaufen.|Конечно, с удовольствием помогу. Пойдём в субботу вместе.
`,
  roleplay: { role: 'продавец в магазине подарков', situation: 'Вы ищете подарки для трёх членов семьи.', goal: 'Объяснить, кому какой подарок вы ищете, используя Dativ (meinem Vater, meiner Schwester…)' },
},
{
  id: 'a2-04', emoji: '🛋️', title: 'Где? Куда?', de: 'Wo oder wohin?',
  goal: 'Описывать расположение предметов: предлоги с Dativ и Akkusativ',
  grammar: {
    title: 'Wechselpräpositionen — двойные предлоги',
    points: [
      'Предлоги **in, an, auf, über, unter, vor, hinter, neben, zwischen** требуют двух падежей.',
      '**Wo?** (где? — место) → **Dativ**: Das Buch liegt **auf dem** Tisch.',
      '**Wohin?** (куда? — направление) → **Akkusativ**: Ich lege das Buch **auf den** Tisch.',
      'Пары глаголов: **legen** (класть) → **liegen** (лежать); **stellen** (ставить) → **stehen** (стоять); **hängen** (вешать/висеть); **setzen** (сажать) → **sitzen** (сидеть).',
      'Слияния: in dem = **im**, an dem = **am**, in das = **ins**, an das = **ans**.',
    ],
    table: [
      ['', 'Wohin? (Akk.)', 'Wo? (Dat.)'],
      ['der Tisch', 'auf den Tisch', 'auf dem Tisch'],
      ['die Wand', 'an die Wand', 'an der Wand'],
      ['das Regal', 'ins Regal', 'im Regal'],
    ],
  },
  words: `
legen|класть
liegen|лежать
stellen|ставить
stehen|стоять
hängen|вешать; висеть
auf|на (поверхности)
unter|под
neben|рядом с
zwischen|между
hinter|за, позади
vor|перед
über|над
das Regal, -e|полка, стеллаж
der Schrank, -¨e|шкаф
die Wand, -¨e|стена
der Schlüssel, -|ключ
`,
  phrases: `
Wo ist mein Schlüssel?|Где мой ключ?
Der Schlüssel liegt auf dem Tisch.|Ключ лежит на столе.
Ich lege das Handy auf den Tisch.|Я кладу телефон на стол.
Das Bild hängt an der Wand.|Картина висит на стене.
Stell die Flasche in den Kühlschrank!|Поставь бутылку в холодильник!
Die Katze schläft unter dem Bett.|Кошка спит под кроватью.
Die Lampe steht neben dem Sofa.|Лампа стоит рядом с диваном.
Wohin soll ich den Stuhl stellen?|Куда мне поставить стул?
`,
  gaps: `
Das Buch liegt auf {dem} Tisch.|Книга лежит на столе.|dem,den,der
Ich lege das Buch auf {den} Tisch.|Я кладу книгу на стол.|den,dem,der
Ich hänge das Bild an {die} Wand.|Я вешаю картину на стену.|die,der,den
Die Milch steht {im} Kühlschrank.|Молоко стоит в холодильнике.|im,ins,in
Ich {stelle} die Vase auf den Tisch.|Я ставлю вазу на стол.|stelle,stehe,liege
Die Katze {liegt} auf dem Sofa.|Кошка лежит на диване.|liegt,legt,stellt
`,
  dialogTitle: 'Переезд',
  dialog: `
A:Wohin soll ich den Karton stellen?|Куда поставить коробку?
B:Stell ihn bitte in die Küche, neben den Kühlschrank.|Поставь её, пожалуйста, на кухню, рядом с холодильником.
A:Okay. Und das Bild?|Хорошо. А картину?
B:Häng es an die Wand über dem Sofa.|Повесь её на стену над диваном.
A:Wo ist eigentlich der Hammer?|А где, кстати, молоток?
B:Er liegt im Bad, auf der Waschmaschine.|Он в ванной, на стиральной машине.
A:Gefunden! Sieht toll aus!|Нашёл! Выглядит классно!
`,
  roleplay: { role: 'друг, который помогает вам переезжать и постоянно спрашивает, куда что ставить', situation: 'День переезда в новую квартиру, вокруг коробки.', goal: 'Объяснить, куда поставить/повесить/положить 4 вещи и где лежат инструменты' },
},
{
  id: 'a2-05', emoji: '💼', title: 'Работа и профессии', de: 'Arbeit und Beruf',
  goal: 'Рассказать о работе, объяснить причины: weil, dass',
  grammar: {
    title: 'Придаточные с weil и dass',
    points: [
      'В придаточном предложении **спрягаемый глагол уходит в конец**: Ich lerne Deutsch, **weil** ich in Deutschland **arbeite**.',
      '**weil** = потому что; **dass** = что (Ich glaube, **dass** der Job interessant **ist**).',
      'С модальным или Perfekt в конце стоит вспомогательный глагол: …, weil ich früh aufstehen **muss**. …, dass er gekündigt **hat**.',
      'Отделяемые приставки в придаточном не отделяются: …, weil die Arbeit um 7 Uhr **anfängt**.',
      '**denn** тоже значит «потому что», но порядок слов обычный: …, **denn** ich **arbeite** in Berlin.',
    ],
  },
  words: `
der Beruf, -e|профессия
die Arbeit|работа
die Firma, Firmen|фирма
der Kollege, -n|коллега (м.)
die Kollegin, -nen|коллега (ж.)
der Chef, -s|начальник
das Gehalt, -¨er|зарплата
der Lehrer, -|учитель
der Ingenieur, -e|инженер
die Krankenpflegerin, -nen|медсестра
der Programmierer, -|программист
verdienen|зарабатывать
weil|потому что
dass|что (союз)
interessant|интересный
anstrengend|утомительный
`,
  phrases: `
Was sind Sie von Beruf?|Кем Вы работаете?
Ich bin Ingenieurin von Beruf.|По профессии я инженер.
Ich arbeite bei einer großen Firma.|Я работаю в большой фирме.
Ich mag meinen Job, weil er interessant ist.|Мне нравится моя работа, потому что она интересная.
Ich glaube, dass das Gehalt gut ist.|Я думаю, что зарплата хорошая.
Meine Kollegen sind sehr nett.|Мои коллеги очень милые.
Ich bin müde, weil ich viel gearbeitet habe.|Я устал, потому что много работал.
Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.|Я учу немецкий, потому что хочу работать в Германии.
`,
  gaps: `
Ich bleibe zu Hause, weil ich krank {bin}.|Я остаюсь дома, потому что болен.|bin,ist,sein
Er sagt, dass er keine Zeit {hat}.|Он говорит, что у него нет времени.|hat,habe,haben
Ich weiß, {dass} du recht hast.|Я знаю, что ты прав.|dass,weil,denn
Sie ist müde, {weil} sie viel arbeitet.|Она устала, потому что много работает.|weil,dass,denn
Ich lerne viel, {denn} ich habe morgen eine Prüfung.|Я много учусь, ведь завтра экзамен.|denn,weil,dass
Ich komme zu spät, weil der Bus nicht {gekommen ist}.|Я опаздываю, потому что автобус не пришёл.|gekommen ist,ist gekommen,kommt ist
`,
  dialogTitle: 'Новая работа',
  dialog: `
A:Ich habe gehört, dass du eine neue Stelle hast!|Я слышал, что у тебя новая работа!
B:Ja! Ich arbeite jetzt als Programmiererin bei einer Firma in München.|Да! Теперь я работаю программистом в фирме в Мюнхене.
A:Gratuliere! Warum hast du gewechselt?|Поздравляю! Почему ты сменила работу?
B:Weil ich mehr verdienen wollte und weil die Arbeit interessanter ist.|Потому что хотела больше зарабатывать и потому что работа интереснее.
A:Und wie sind die Kollegen?|А какие коллеги?
B:Super nett! Ich glaube, dass ich dort viel lernen kann.|Очень милые! Думаю, что смогу там многому научиться.
`,
  roleplay: { role: 'сотрудник кадрового агентства Frau Schneider', situation: 'Первая консультация в кадровом агентстве: вы ищете работу в Германии.', goal: 'Рассказать о профессии и опыте, объяснить, почему ищете новую работу (weil, dass)' },
},
{
  id: 'a2-06', emoji: '🏙️', title: 'Город или деревня?', de: 'Stadt oder Land?',
  goal: 'Сравнивать: сравнительная и превосходная степень',
  grammar: {
    title: 'Komparativ и Superlativ',
    points: [
      'Сравнительная степень: **+ er**: schnell → schnell**er**, billig → billig**er**. Сравнение: **als**: Berlin ist größer **als** München. Равенство: **so … wie**: Ich bin **so** groß **wie** du.',
      'Превосходная: **am + -sten**: am schnell**sten**, am billig**sten**. Перед существительным: **der schnellste** Zug.',
      'Короткие слова часто получают умлаут: alt → **ä**lter → am **ä**ltesten; groß → **gr**ö**ßer**; jung → j**ü**nger.',
      'Исключения: **gut → besser → am besten**, **viel → mehr → am meisten**, **gern → lieber → am liebsten**, hoch → höher, nah → näher → am nächsten.',
    ],
    table: [
      ['', 'Komparativ', 'Superlativ'],
      ['klein', 'kleiner', 'am kleinsten'],
      ['alt', 'älter', 'am ältesten'],
      ['gut', 'besser', 'am besten'],
      ['viel', 'mehr', 'am meisten'],
      ['gern', 'lieber', 'am liebsten'],
    ],
  },
  words: `
das Land|деревня, сельская местность; страна
das Dorf, -¨er|деревня
die Natur|природа
der Verkehr|движение, транспорт
ruhig|тихий
laut|шумный
schnell|быстрый
langsam|медленный
günstig|выгодный, недорогой
sauber|чистый
gefährlich|опасный
besser|лучше
am besten|лучше всего
mehr|больше
als|чем
wie|как
`,
  phrases: `
Das Leben auf dem Land ist ruhiger als in der Stadt.|Жизнь в деревне спокойнее, чем в городе.
In der Stadt ist alles schneller.|В городе всё быстрее.
Die Mieten sind in München am höchsten.|Аренда выше всего в Мюнхене.
Ich wohne lieber in der Stadt.|Мне больше нравится жить в городе.
Mein Bruder ist älter als ich.|Мой брат старше меня.
Das Fahrrad ist so schnell wie der Bus.|Велосипед такой же быстрый, как автобус.
Was gefällt dir am besten?|Что тебе нравится больше всего?
Hier gibt es mehr Natur und weniger Verkehr.|Здесь больше природы и меньше транспорта.
`,
  gaps: `
Berlin ist größer {als} Hamburg.|Берлин больше, чем Гамбург.|als,wie,dann
Anna ist so alt {wie} ich.|Анна такого же возраста, как я.|wie,als,so
Kaffee schmeckt mir {besser} als Tee.|Кофе мне нравится больше чая.|besser,guter,gutter
Im Dorf ist es {ruhiger}.|В деревне тише.|ruhiger,mehr ruhig,ruhigster
Der ICE ist am {schnellsten}.|ICE быстрее всех.|schnellsten,schneller,schnellste
Ich trinke {lieber} Tee.|Я больше люблю чай.|lieber,gerner,mehr gern
`,
  dialogTitle: 'Переезд за город?',
  dialog: `
A:Wir wollen aufs Land ziehen. Was denkst du?|Мы хотим переехать за город. Что думаешь?
B:Auf dem Land ist es ruhiger und die Luft ist sauberer.|За городом спокойнее и воздух чище.
A:Ja, und die Häuser sind günstiger als in der Stadt.|Да, и дома дешевле, чем в городе.
B:Aber der Weg zur Arbeit ist länger.|Но дорога на работу длиннее.
A:Stimmt. Mit dem Zug brauche ich eine Stunde.|Верно. На поезде мне нужен час.
B:Für die Kinder ist das Land vielleicht am besten.|Для детей деревня, пожалуй, лучше всего.
`,
  roleplay: { role: 'друг-горожанин, который обожает большой город и спорит с вами', situation: 'Вы обсуждаете, где лучше жить — в мегаполисе или в деревне.', goal: 'Привести 3 сравнения (Komparativ) и назвать, что для вас «am wichtigsten»' },
},
{
  id: 'a2-07', emoji: '🪥', title: 'Утро и привычки', de: 'Mein Morgen',
  goal: 'Описывать рутину с возвратными глаголами',
  grammar: {
    title: 'Возвратные глаголы (sich)',
    points: [
      'Русское «-ся» в немецком — местоимение **sich**: sich waschen (умываться), sich anziehen (одеваться).',
      'Местоимение меняется по лицам: ich wasche **mich**, du wäschst **dich**, er wäscht **sich**, wir waschen **uns**, ihr wascht **euch**, sie waschen **sich**.',
      'Если есть ещё объект, местоимение в Dativ: Ich putze **mir** die Zähne. Ich wasche **mir** die Hände.',
      'Глаголы с предлогами: sich freuen **auf** (ждать с радостью) / **über** (радоваться чему-то), sich interessieren **für**, sich ärgern **über**.',
    ],
    table: [
      ['', 'Akkusativ', 'Dativ'],
      ['ich', 'mich', 'mir'],
      ['du', 'dich', 'dir'],
      ['er/sie/es', 'sich', 'sich'],
      ['wir', 'uns', 'uns'],
      ['ihr', 'euch', 'euch'],
      ['sie/Sie', 'sich', 'sich'],
    ],
  },
  words: `
sich waschen|умываться
sich duschen|принимать душ
sich anziehen|одеваться
sich beeilen|торопиться
sich freuen|радоваться
sich ärgern|злиться
sich interessieren|интересоваться
sich ausruhen|отдыхать
sich treffen|встречаться
die Zähne putzen|чистить зубы
sich kämmen|причёсываться
der Wecker, -|будильник
müde|уставший
pünktlich|пунктуальный, вовремя
`,
  phrases: `
Ich dusche mich jeden Morgen.|Я принимаю душ каждое утро.
Ich putze mir die Zähne.|Я чищу зубы.
Beeil dich, wir sind spät dran!|Поторопись, мы опаздываем!
Ich freue mich auf das Wochenende.|Я жду не дождусь выходных.
Er interessiert sich für Politik.|Он интересуется политикой.
Wir treffen uns um acht vor dem Kino.|Встречаемся в восемь перед кинотеатром.
Ich ärgere mich über den Lärm.|Меня злит шум.
Am Sonntag ruhe ich mich aus.|В воскресенье я отдыхаю.
`,
  gaps: `
Ich wasche {mich}.|Я умываюсь.|mich,mir,sich
Du musst {dich} beeilen!|Тебе нужно поторопиться!|dich,dir,sich
Er zieht {sich} an.|Он одевается.|sich,ihn,ihm
Wir freuen {uns} auf den Urlaub.|Мы ждём отпуск.|uns,euch,sich
Ich putze {mir} die Zähne.|Я чищу зубы.|mir,mich,sich
Interessierst du dich {für} Kunst?|Ты интересуешься искусством?|für,auf,über
`,
  dialogTitle: 'Утренний хаос',
  dialog: `
A:Bist du schon fertig? Wir müssen los!|Ты уже готов? Нам пора!
B:Moment! Ich dusche mich noch.|Минутку! Я ещё в душе.
A:Beeil dich! Der Bus kommt in zehn Minuten.|Поторопись! Автобус через десять минут.
B:Ich ziehe mich schnell an. Wo ist mein Pullover?|Быстро одеваюсь. Где мой свитер?
A:Auf dem Stuhl. Hast du dir die Zähne geputzt?|На стуле. Ты почистил зубы?
B:Ja, ja! Ich bin fertig. Los geht's!|Да-да! Я готов. Поехали!
A:Endlich! Ich freue mich so auf den Ausflug!|Наконец-то! Я так жду эту поездку!
`,
  roleplay: { role: 'фитнес-тренер, который составляет вам режим дня', situation: 'Консультация: тренер хочет понять ваши утренние привычки.', goal: 'Описать своё утро возвратными глаголами и сказать, чему вы радуетесь (sich freuen auf)' },
},
{
  id: 'a2-08', emoji: '🧥', title: 'Внешность и характер', de: 'Aussehen und Charakter',
  goal: 'Описывать людей и вещи: окончания прилагательных',
  grammar: {
    title: 'Склонение прилагательных (основное)',
    points: [
      'Перед существительным прилагательное получает окончание. Главное правило: **после der/die/das** чаще всего **-e**, в остальных падежах **-en**: der nett**e** Mann, die nett**e** Frau, das nett**e** Kind; mit dem nett**en** Mann.',
      'После **ein/kein/mein** прилагательное «показывает род», если артикль этого не сделал: ein nett**er** Mann, eine nett**e** Frau, ein nett**es** Kind.',
      'Akkusativ мужской род: einen nett**en** Mann, den nett**en** Mann.',
      'Совет: **-en** — самое частое окончание. Если сомневаетесь в Dativ или мн. ч. — ставьте -en.',
    ],
    table: [
      ['Nom.', 'der große Mann', 'ein großer Mann'],
      ['', 'die kleine Frau', 'eine kleine Frau'],
      ['', 'das schöne Kind', 'ein schönes Kind'],
      ['Akk.', 'den großen Mann', 'einen großen Mann'],
      ['Dat.', 'dem großen Mann', 'einem großen Mann'],
    ],
  },
  words: `
das Aussehen|внешность
der Charakter, -e|характер
die Haare|волосы
blond|светловолосый
lockig|кудрявый
schlank|стройный
hübsch|симпатичный
freundlich|дружелюбный
lustig|весёлый
ehrlich|честный
fleißig|трудолюбивый
faul|ленивый
ernst|серьёзный
geduldig|терпеливый
die Brille, -n|очки
der Bart, -¨e|борода
`,
  phrases: `
Wie sieht er aus?|Как он выглядит?
Er hat kurze, schwarze Haare.|У него короткие чёрные волосы.
Sie trägt eine runde Brille.|Она носит круглые очки.
Mein Bruder ist ein sehr lustiger Mensch.|Мой брат очень весёлый человек.
Ich suche einen ehrlichen Partner.|Я ищу честного партнёра.
Das ist eine gute Idee!|Это хорошая идея!
Sie hat ein freundliches Lächeln.|У неё дружелюбная улыбка.
Der neue Kollege ist sehr fleißig.|Новый коллега очень трудолюбивый.
`,
  gaps: `
Das ist ein {netter} Mann.|Это милый мужчина.|netter,nette,netten
Ich habe eine {kleine} Wohnung.|У меня маленькая квартира.|kleine,kleiner,kleines
Sie hat ein {schönes} Kleid.|У неё красивое платье.|schönes,schöne,schöner
Ich kaufe einen {neuen} Computer.|Я покупаю новый компьютер.|neuen,neuer,neue
Der {alte} Mann wohnt hier.|Здесь живёт старый мужчина.|alte,alter,alten
Er spricht mit der {jungen} Frau.|Он говорит с молодой женщиной.|jungen,junge,junger
`,
  dialogTitle: 'Кто это на фото?',
  dialog: `
A:Wer ist der Mann mit dem langen Bart?|Кто этот мужчина с длинной бородой?
B:Das ist mein Onkel. Er ist ein sehr lustiger Typ.|Это мой дядя. Он очень весёлый тип.
A:Und die Frau mit der roten Jacke?|А женщина в красной куртке?
B:Das ist meine Cousine. Sie ist klug und sehr ehrlich.|Это моя двоюродная сестра. Она умная и очень честная.
A:Sie sieht sympathisch aus! Hat sie einen Freund?|Она выглядит симпатично! У неё есть парень?
B:Haha, ja, sie hat einen netten Freund aus Spanien.|Ха-ха, да, у неё милый парень из Испании.
`,
  roleplay: { role: 'полицейский, который помогает найти потерявшегося друга (не опасная ситуация)', situation: 'На фестивале вы потеряли друга, полицейский просит описать его.', goal: 'Описать внешность, одежду и характер человека с правильными окончаниями прилагательных' },
},
{
  id: 'a2-09', emoji: '🧸', title: 'Детство', de: 'Meine Kindheit',
  goal: 'Вспоминать прошлое: war, hatte, модальные в прошедшем, als и wenn',
  grammar: {
    title: 'Präteritum: sein, haben, модальные; als / wenn',
    points: [
      'Глаголы **sein, haben** и **модальные** в прошлом обычно ставят в **Präteritum**, даже в разговоре: ich **war**, ich **hatte**, ich **konnte**, ich **musste**, ich **wollte**, ich **durfte**.',
      'Окончания: ich war, du war**st**, er war, wir war**en**, ihr war**t**, sie war**en**. (1-е и 3-е лицо ед. ч. одинаковые!)',
      '**als** — одно событие в прошлом: **Als** ich zehn **war**, bekam ich einen Hund.',
      '**wenn** — повторяющееся («каждый раз, когда») или настоящее/будущее: **Wenn** ich Oma besuchte, backte sie Kuchen.',
    ],
    table: [
      ['', 'sein', 'haben', 'können', 'müssen'],
      ['ich', 'war', 'hatte', 'konnte', 'musste'],
      ['du', 'warst', 'hattest', 'konntest', 'musstest'],
      ['er/sie', 'war', 'hatte', 'konnte', 'musste'],
      ['wir', 'waren', 'hatten', 'konnten', 'mussten'],
    ],
  },
  words: `
die Kindheit|детство
als Kind|в детстве
war|был (sein)
hatte|имел (haben)
konnte|мог
musste|должен был
wollte|хотел
durfte|разрешалось
das Spielzeug, -e|игрушка
der Kindergarten, -¨|детский сад
die Grundschule, -n|начальная школа
der Nachbar, -n|сосед
früher|раньше
damals|тогда
`,
  phrases: `
Als Kind war ich sehr schüchtern.|В детстве я был очень застенчивым.
Ich hatte einen kleinen Hund.|У меня была маленькая собака.
Als ich sechs war, bin ich in die Schule gekommen.|Когда мне было шесть, я пошёл в школу.
Wenn es geschneit hat, haben wir Schneemänner gebaut.|Когда шёл снег, мы лепили снеговиков.
Ich durfte nicht lange fernsehen.|Мне нельзя было долго смотреть телевизор.
Ich wollte Astronaut werden.|Я хотел стать космонавтом.
Früher konnte ich nicht schwimmen.|Раньше я не умел плавать.
Damals gab es noch keine Handys.|Тогда ещё не было мобильных телефонов.
`,
  gaps: `
Als Kind {war} ich oft krank.|В детстве я часто болел.|war,bin,wäre
Wir {hatten} einen großen Garten.|У нас был большой сад.|hatten,haben,hatte
{Als} ich klein war, wohnten wir in Kiew.|Когда я был маленьким, мы жили в Киеве.|Als,Wenn,Wann
{Wenn} es regnete, spielten wir drinnen.|Когда шёл дождь, мы играли дома.|Wenn,Als,Wann
Ich {musste} jeden Tag Klavier üben.|Мне приходилось каждый день заниматься на фортепиано.|musste,muss,müsste
Du {warst} ein süßes Kind!|Ты был милым ребёнком!|warst,war,wart
`,
  dialogTitle: 'Старые фото',
  dialog: `
A:Bist du das auf dem Foto? Wie alt warst du da?|Это ты на фото? Сколько тебе тогда было?
B:Da war ich ungefähr fünf. Wir wohnten damals auf dem Land.|Тут мне примерно пять. Мы тогда жили в деревне.
A:Süß! Was hast du als Kind gern gemacht?|Мило! Что ты любил делать в детстве?
B:Ich war immer draußen. Wir hatten Hühner und eine Katze.|Я всегда был на улице. У нас были куры и кошка.
A:Und was wolltest du werden?|А кем ты хотел стать?
B:Als ich klein war, wollte ich Tierarzt werden!|Когда я был маленьким, хотел стать ветеринаром!
`,
  roleplay: { role: 'внук, который берёт у вас интервью для школьного проекта «Как жили раньше»', situation: 'Школьный проект о детстве разных поколений.', goal: 'Рассказать о детстве с war/hatte/konnte/musste и предложениями с als и wenn' },
},
{
  id: 'a2-10', emoji: '🥂', title: 'Праздники и приглашения', de: 'Feste und Einladungen',
  goal: 'Вежливо приглашать, принимать и отклонять: Konjunktiv II',
  grammar: {
    title: 'Вежливость: würde, könnte, hätte gern',
    points: [
      'Чтобы звучать вежливо, используем **Konjunktiv II**: **Könnten Sie** mir helfen? **Würden Sie** bitte das Fenster schließen? **Ich hätte gern** ein Glas Wasser.',
      '**würde + инфинитив** = «бы»: Ich **würde** gern **kommen**, aber ich habe keine Zeit.',
      'Предложение: **Hättest du Lust**, ins Kino zu gehen? Совет: **Du solltest** … (тебе следовало бы).',
      'Формы: ich würde / könnte / hätte / wäre / sollte, du würdest / könntest / hättest / wärst.',
    ],
  },
  words: `
das Fest, -e|праздник
die Einladung, -en|приглашение
einladen|приглашать
feiern|праздновать
die Hochzeit, -en|свадьба
Weihnachten|Рождество
Silvester|Новый год (31 декабря)
Ostern|Пасха
gratulieren|поздравлять
würde|бы (вежливо)
könnte|мог бы
hätte gern|хотел бы (иметь)
leider|к сожалению
die Lust|желание, охота
`,
  phrases: `
Ich möchte dich zu meiner Party einladen.|Я хочу пригласить тебя на вечеринку.
Hättest du Lust, am Samstag zu kommen?|Не хочешь прийти в субботу?
Ich würde gern kommen, aber ich habe leider keine Zeit.|Я бы с удовольствием пришёл, но, к сожалению, нет времени.
Könntest du einen Salat mitbringen?|Ты мог бы принести салат?
Herzlichen Glückwunsch zur Hochzeit!|Поздравляю со свадьбой!
Frohe Weihnachten und ein gutes neues Jahr!|Счастливого Рождества и хорошего нового года!
Vielen Dank für die Einladung!|Большое спасибо за приглашение!
Würden Sie mir bitte helfen?|Не могли бы Вы мне помочь?
`,
  gaps: `
{Könnten} Sie mir bitte helfen?|Не могли бы Вы мне помочь?|Könnten,Können,Konnten
Ich {würde} gern mitkommen.|Я бы с удовольствием пошёл.|würde,werde,wurde
Ich {hätte} gern einen Tee.|Я бы хотел чаю.|hätte,habe,hatte
{Hättest} du Lust auf Kino?|Не хочешь в кино?|Hättest,Hast,Hattest
Herzlichen Glückwunsch {zum} Geburtstag!|С днём рождения!|zum,zur,für
Ich lade dich {zu} meiner Party ein.|Приглашаю тебя на вечеринку.|zu,auf,in
`,
  dialogTitle: 'Приглашение на день рождения',
  dialog: `
A:Hey! Ich feiere am Samstag meinen dreißigsten Geburtstag. Hättest du Lust zu kommen?|Привет! В субботу я праздную 30-летие. Хочешь прийти?
B:Oh, vielen Dank für die Einladung! Ich komme sehr gern.|Ой, спасибо за приглашение! С удовольствием приду.
A:Super! Könntest du vielleicht einen Kuchen mitbringen?|Супер! Ты не мог бы принести торт?
B:Klar! Welchen Kuchen hättest du gern?|Конечно! Какой торт ты бы хотел?
A:Schokoladenkuchen wäre toll!|Шоколадный был бы супер!
B:Kein Problem. Um wie viel Uhr soll ich da sein?|Без проблем. Во сколько мне быть?
A:Ab acht Uhr. Ich freue mich!|С восьми. Я рад!
`,
  roleplay: { role: 'коллега Julia, которая организует новогоднюю вечеринку', situation: 'Коллега приглашает вас на корпоратив и просит помочь с подготовкой.', goal: 'Вежливо ответить на приглашение, предложить помощь и задать вопросы (könnte, würde, hätte gern)' },
},
];
