import type { LessonSrc } from './types';

export const A1: LessonSrc[] = [
{
  id: 'a1-01', emoji: '👋', title: 'Привет! Звуки немецкого', de: 'Hallo! Die Aussprache',
  goal: 'Здороваться и прощаться, услышать и произнести главные немецкие звуки',
  grammar: {
    title: 'Как читать по-немецки',
    points: [
      'Немецкий читается почти так же, как пишется. Выучите 10 правил — и сможете прочитать любое слово.',
      '**Все существительные пишутся с большой буквы**: der Tag, die Nacht.',
      'Ударение обычно на **первый слог**: GUten MORgen.',
    ],
    table: [
      ['Буквы', 'Звук', 'Пример'],
      ['ei', '«ай»', 'drei, mein, nein'],
      ['ie', 'долгое «и»', 'Bier, vier, Liebe'],
      ['eu / äu', '«ой»', 'neu, heute, Häuser'],
      ['sch', '«ш»', 'Schule, schön'],
      ['st / sp в начале', '«шт» / «шп»', 'Straße, Sport'],
      ['ch', 'мягкое «хь» / «х»', 'ich, Buch'],
      ['z', '«ц»', 'Zeit, zehn'],
      ['w / v', '«в» / «ф»', 'Wasser, Vater'],
      ['ä / ö / ü', '«э» / «ё» / «ю» (губы трубочкой)', 'Mädchen, schön, müde'],
      ['ß', 'долгое «с»', 'Straße, groß'],
    ],
  },
  words: `
hallo|привет
tschüss|пока
ja|да
nein|нет
danke|спасибо
bitte|пожалуйста
der Morgen|утро
der Tag|день
der Abend|вечер
die Nacht|ночь
gut|хорошо
schön|красиво, прекрасно
`,
  phrases: `
Guten Morgen!|Доброе утро!
Guten Tag!|Добрый день!
Guten Abend!|Добрый вечер!
Gute Nacht!|Спокойной ночи!
Auf Wiedersehen!|До свидания!
Bis morgen!|До завтра!
Wie geht's?|Как дела?
Danke, gut!|Спасибо, хорошо!
Danke schön!|Большое спасибо!
`,
  gaps: `
Guten {Morgen}!|Доброе утро!|Morgen,Abend,Nacht
Gute {Nacht}!|Спокойной ночи!|Nacht,Tag,Morgen
Danke {schön}!|Большое спасибо!|schön,gut,bitte
Auf {Wiedersehen}!|До свидания!|Wiedersehen,Tschüss,Hallo
Bis {morgen}!|До завтра!|morgen,Abend,gut
`,
  dialogTitle: 'Утром у дома',
  dialog: `
A:Guten Morgen!|Доброе утро!
B:Guten Morgen!|Доброе утро!
A:Wie geht's?|Как дела?
B:Danke, gut!|Спасибо, хорошо!
A:Schön! Tschüss!|Прекрасно! Пока!
B:Tschüss! Bis morgen!|Пока! До завтра!
`,
  roleplay: { role: 'приветливая соседка Frau Müller', situation: 'Утро, вы встречаете соседку у подъезда.', goal: 'Поздороваться, спросить «как дела» и попрощаться' },
},
{
  id: 'a1-02', emoji: '🙋', title: 'Знакомство', de: 'Wer bist du?',
  goal: 'Представиться, сказать откуда вы и спросить собеседника',
  grammar: {
    title: 'Глагол sein (быть) и местоимения',
    points: [
      'В немецком глагол-связку нельзя пропускать: «Я — Анна» = **Ich bin Anna**.',
      '**du** — «ты» (друзья, дети), **Sie** — «Вы» (вежливо, всегда с большой буквы).',
      'Глагол **heißen** (зваться): ich heiße, du heißt, Sie heißen. **kommen** (приходить, быть родом): ich komme, du kommst, er kommt.',
      'В вопросе с вопросительным словом глагол стоит на **2-м месте**: Wie **heißt** du? Woher **kommst** du?',
    ],
    table: [
      ['', 'sein', 'kommen'],
      ['ich', 'bin', 'komme'],
      ['du', 'bist', 'kommst'],
      ['er/sie/es', 'ist', 'kommt'],
      ['wir', 'sind', 'kommen'],
      ['ihr', 'seid', 'kommt'],
      ['sie/Sie', 'sind', 'kommen'],
    ],
  },
  words: `
ich|я
du|ты
Sie|Вы (вежливо)
heißen|зваться
kommen|приходить; быть родом
wohnen|жить (где-то)
sprechen|говорить
der Name, -n|имя
das Land, -¨er|страна
die Stadt, -¨e|город
Deutschland|Германия
Russland|Россия
woher|откуда
wo|где
`,
  phrases: `
Ich heiße Anna.|Меня зовут Анна.
Wie heißt du?|Как тебя зовут?
Wie heißen Sie?|Как Вас зовут?
Ich komme aus Russland.|Я из России.
Woher kommst du?|Откуда ты?
Ich wohne in Berlin.|Я живу в Берлине.
Wo wohnen Sie?|Где Вы живёте?
Ich spreche ein bisschen Deutsch.|Я немного говорю по-немецки.
Freut mich!|Очень приятно!
Das ist mein Freund Max.|Это мой друг Макс.
`,
  gaps: `
Ich {bin} Anna.|Я Анна.|bin,bist,ist
Wie {heißt} du?|Как тебя зовут?|heißt,heiße,heißen
Woher {kommen} Sie?|Откуда Вы?|kommen,kommst,komme
Er {wohnt} in Hamburg.|Он живёт в Гамбурге.|wohnt,wohne,wohnen
Wir {sind} aus Kasachstan.|Мы из Казахстана.|sind,seid,ist
Ich komme {aus} Russland.|Я из России.|aus,in,von
Ich wohne {in} München.|Я живу в Мюнхене.|in,aus,nach
`,
  dialogTitle: 'На языковых курсах',
  dialog: `
A:Hallo! Ich bin Lukas. Wie heißt du?|Привет! Я Лукас. Как тебя зовут?
B:Hallo! Ich heiße Anna.|Привет! Меня зовут Анна.
A:Freut mich, Anna! Woher kommst du?|Очень приятно, Анна! Откуда ты?
B:Ich komme aus Russland. Und du?|Я из России. А ты?
A:Ich komme aus Österreich, aus Wien. Wo wohnst du?|Я из Австрии, из Вены. Где ты живёшь?
B:Ich wohne in Berlin.|Я живу в Берлине.
A:Super! Ich auch!|Супер! Я тоже!
`,
  roleplay: { role: 'новый одногруппник на курсах немецкого по имени Lukas из Вены', situation: 'Первый день на языковых курсах в Берлине, перерыв.', goal: 'Представиться, сказать откуда вы и где живёте, узнать то же у собеседника' },
},
{
  id: 'a1-03', emoji: '🔢', title: 'Числа и возраст', de: 'Zahlen und Alter',
  goal: 'Считать до 100, называть возраст и номер телефона',
  grammar: {
    title: 'Числа: «один-и-двадцать»',
    points: [
      '0–12 нужно выучить: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf.',
      '13–19: число + zehn: **dreizehn**, vierzehn… (но **sechzehn**, **siebzehn**).',
      'Десятки: zwanzig, **dreißig**, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig, hundert.',
      'Главная особенность — **единицы называются первыми**: 21 = **einundzwanzig** («один-и-двадцать»), 47 = siebenundvierzig.',
      'Возраст: **Ich bin 25 Jahre alt.** Вопрос: **Wie alt bist du?**',
    ],
  },
  words: `
eins|один
zwei|два
drei|три
vier|четыре
fünf|пять
sechs|шесть
sieben|семь
acht|восемь
neun|девять
zehn|десять
zwölf|двенадцать
zwanzig|двадцать
dreißig|тридцать
hundert|сто
das Jahr, -e|год
alt|старый; (о возрасте) лет
die Telefonnummer, -n|номер телефона
`,
  phrases: `
Wie alt bist du?|Сколько тебе лет?
Ich bin dreißig Jahre alt.|Мне тридцать лет.
Wie ist deine Telefonnummer?|Какой у тебя номер телефона?
Meine Nummer ist null eins sieben neun.|Мой номер ноль-один-семь-девять.
Das kostet zwanzig Euro.|Это стоит двадцать евро.
Ich habe zwei Kinder.|У меня двое детей.
Noch einmal, bitte.|Ещё раз, пожалуйста.
Langsam, bitte!|Медленнее, пожалуйста!
`,
  gaps: `
Ich bin 25 Jahre alt: fünfund{zwanzig}.|25 — «пять-и-двадцать».|zwanzig,zwölf,zehn
Wie {alt} bist du?|Сколько тебе лет?|alt,viel,Jahr
21 = {einundzwanzig}|21|einundzwanzig,zwanzigeins,eineszwanzig
30 = {dreißig}|30|dreißig,dreizig,dreizehn
16 = {sechzehn}|16|sechzehn,sechszehn,sechzig
`,
  dialogTitle: 'Новый номер',
  dialog: `
A:Wie alt bist du?|Сколько тебе лет?
B:Ich bin dreißig Jahre alt. Und du?|Мне тридцать. А тебе?
A:Ich bin achtundzwanzig. Wie ist deine Telefonnummer?|Мне двадцать восемь. Какой у тебя номер?
B:Null eins sieben neun, vier fünf, drei zwei.|Ноль-один-семь-девять, четыре-пять, три-два.
A:Noch einmal, bitte. Langsam!|Ещё раз, пожалуйста. Медленно!
B:Null eins sieben neun – vier fünf – drei zwei.|Ноль-один-семь-девять — четыре-пять — три-два.
A:Danke! Ich rufe dich an.|Спасибо! Я тебе позвоню.
`,
  roleplay: { role: 'сотрудник фитнес-клуба, который заполняет анкету нового клиента', situation: 'Вы записываетесь в спортзал, администратор спрашивает ваши данные.', goal: 'Назвать имя, возраст, номер телефона и номер дома по-немецки' },
},
{
  id: 'a1-04', emoji: '👨‍👩‍👧', title: 'Моя семья', de: 'Meine Familie',
  goal: 'Рассказать о семье, использовать haben и притяжательные местоимения',
  grammar: {
    title: 'Глагол haben и mein / dein',
    points: [
      '**haben** (иметь): ich habe, du **hast**, er **hat**, wir haben, ihr habt, sie haben. «У меня есть брат» = **Ich habe einen Bruder.**',
      '**mein** (мой) / **dein** (твой) меняются как артикль ein: **mein** Vater, **meine** Mutter, **mein** Kind, **meine** Eltern (мн. ч.).',
      'sein (его) / ihr (её): **sein** Bruder, **ihre** Schwester.',
    ],
    table: [
      ['', 'der', 'die', 'das', 'мн. ч.'],
      ['мой', 'mein Vater', 'meine Mutter', 'mein Kind', 'meine Eltern'],
      ['твой', 'dein Bruder', 'deine Schwester', 'dein Baby', 'deine Kinder'],
    ],
  },
  words: `
die Familie, -n|семья
der Vater, -¨|отец
die Mutter, -¨|мать
die Eltern|родители
der Bruder, -¨|брат
die Schwester, -n|сестра
der Sohn, -¨e|сын
die Tochter, -¨|дочь
das Kind, -er|ребёнок
der Opa, -s|дедушка
die Oma, -s|бабушка
verheiratet|женат / замужем
ledig|не женат / не замужем
haben|иметь
`,
  phrases: `
Das ist meine Familie.|Это моя семья.
Ich habe einen Bruder und eine Schwester.|У меня есть брат и сестра.
Hast du Kinder?|У тебя есть дети?
Mein Vater heißt Peter.|Моего отца зовут Петер.
Meine Mutter ist Lehrerin.|Моя мама — учительница.
Ich bin verheiratet.|Я женат / замужем.
Meine Eltern wohnen in Moskau.|Мои родители живут в Москве.
Wie heißt deine Schwester?|Как зовут твою сестру?
`,
  gaps: `
Ich {habe} zwei Kinder.|У меня двое детей.|habe,hast,hat
{Hast} du Geschwister?|У тебя есть братья и сёстры?|Hast,Habe,Hat
Das ist {meine} Mutter.|Это моя мама.|meine,mein,meinen
Das ist {mein} Vater.|Это мой папа.|mein,meine,meiner
Wie heißt {deine} Schwester?|Как зовут твою сестру?|deine,dein,du
Sie {hat} einen Sohn.|У неё есть сын.|hat,habt,haben
`,
  dialogTitle: 'Фото семьи',
  dialog: `
A:Ist das deine Familie?|Это твоя семья?
B:Ja, das ist meine Familie.|Да, это моя семья.
A:Wer ist das?|Кто это?
B:Das ist mein Bruder. Er heißt Ivan.|Это мой брат. Его зовут Иван.
A:Und die Frau hier?|А женщина здесь?
B:Das ist meine Mutter.|Это моя мама.
A:Hast du auch Kinder?|А у тебя есть дети?
B:Ja, ich habe eine Tochter.|Да, у меня есть дочь.
`,
  roleplay: { role: 'любопытная коллега Sabine, которая смотрит ваши семейные фото', situation: 'В обеденный перерыв вы показываете фото семьи на телефоне.', goal: 'Рассказать о 3 членах семьи: кто это, как зовут, где живут' },
},
{
  id: 'a1-05', emoji: '🍎', title: 'Еда и напитки', de: 'Essen und Trinken',
  goal: 'Называть продукты, говорить что вы любите, понять роды der/die/das',
  grammar: {
    title: 'Род существительных: der, die, das',
    points: [
      'У каждого существительного есть род: **der** (мужской), **die** (женский), **das** (средний). Учите слова сразу с артиклем!',
      'Род часто не совпадает с русским: **das** Mädchen (девочка), **der** Apfel, **die** Milch.',
      'Неопределённый артикль: **ein** (der/das), **eine** (die): ein Apfel, eine Banane, ein Ei.',
      'Отрицание существительного — **kein/keine**: Ich esse **kein** Fleisch.',
      '«Я люблю…» о еде: **Ich esse gern** Pizza. / **Ich trinke gern** Kaffee.',
    ],
  },
  words: `
das Brot, -e|хлеб
der Apfel, -¨|яблоко
die Banane, -n|банан
der Käse|сыр
die Milch|молоко
das Wasser|вода
der Kaffee|кофе
der Tee|чай
das Fleisch|мясо
der Fisch, -e|рыба
das Ei, -er|яйцо
die Kartoffel, -n|картофель
das Gemüse|овощи
das Obst|фрукты
essen|есть
trinken|пить
`,
  phrases: `
Ich esse gern Obst.|Я люблю есть фрукты.
Was trinkst du gern?|Что ты любишь пить?
Ich trinke Kaffee mit Milch.|Я пью кофе с молоком.
Ich esse kein Fleisch.|Я не ем мясо.
Ich habe Hunger.|Я голоден.
Ich habe Durst.|Я хочу пить.
Das schmeckt gut!|Это вкусно!
Zum Frühstück esse ich Brot mit Käse.|На завтрак я ем хлеб с сыром.
`,
  gaps: `
{Der} Käse ist lecker.|Сыр вкусный.|Der,Die,Das
{Die} Milch ist kalt.|Молоко холодное.|Die,Der,Das
{Das} Brot ist frisch.|Хлеб свежий.|Das,Der,Die
Ich esse {kein} Fleisch.|Я не ем мясо.|kein,keine,nicht
Ich trinke {keine} Milch.|Я не пью молоко.|keine,kein,nicht
Ich esse {gern} Fisch.|Я люблю рыбу.|gern,gut,viel
Ich habe {Durst}.|Я хочу пить.|Durst,Hunger,Wasser
`,
  dialogTitle: 'Что на завтрак?',
  dialog: `
A:Ich habe Hunger! Was essen wir?|Я голоден! Что поедим?
B:Ich habe Brot, Käse und Eier.|У меня есть хлеб, сыр и яйца.
A:Super! Und was trinkst du?|Супер! А что ты пьёшь?
B:Ich trinke Tee. Und du?|Я пью чай. А ты?
A:Kaffee mit Milch, bitte.|Кофе с молоком, пожалуйста.
B:Hier, bitte. Guten Appetit!|Вот, пожалуйста. Приятного аппетита!
A:Danke! Das schmeckt gut!|Спасибо! Вкусно!
`,
  roleplay: { role: 'друг, который пригласил вас на завтрак и спрашивает, что вы любите', situation: 'Воскресное утро, вы в гостях у друга, он готовит завтрак.', goal: 'Сказать, что вы любите и не любите есть и пить' },
},
{
  id: 'a1-06', emoji: '☕', title: 'В кафе', de: 'Im Café',
  goal: 'Заказать еду и напитки, спросить цену и оплатить',
  grammar: {
    title: 'möchten и винительный падеж (Akkusativ)',
    points: [
      '**Ich möchte** = «Я бы хотел(а)» — вежливо: ich möchte, du möchtest, er möchte, Sie möchten. Второй глагол — в конце: Ich möchte **bezahlen**.',
      'После большинства глаголов (haben, möchten, essen, nehmen…) существительное в **Akkusativ**.',
      'В Akkusativ меняется **только мужской род**: der → **den**, ein → **einen**, kein → **keinen**. Женский и средний не меняются!',
      'Ich nehme **einen** Kaffee, **eine** Cola und **ein** Stück Kuchen.',
    ],
    table: [
      ['', 'Nominativ', 'Akkusativ'],
      ['der', 'der / ein Tee', 'den / einen Tee'],
      ['die', 'die / eine Suppe', 'die / eine Suppe'],
      ['das', 'das / ein Wasser', 'das / ein Wasser'],
    ],
  },
  words: `
das Café, -s|кафе
die Speisekarte, -n|меню
der Kuchen, -|пирог, торт
das Stück, -e|кусок
die Suppe, -n|суп
der Salat, -e|салат
die Rechnung, -en|счёт
der Kellner, -|официант
nehmen|брать
möchten|хотеть (вежливо)
bezahlen|платить
zusammen|вместе
getrennt|раздельно
lecker|вкусный
`,
  phrases: `
Ich möchte einen Kaffee, bitte.|Я бы хотел(а) кофе, пожалуйста.
Was möchten Sie?|Что Вы желаете?
Ich nehme ein Stück Kuchen.|Я возьму кусок торта.
Die Speisekarte, bitte.|Меню, пожалуйста.
Was kostet der Salat?|Сколько стоит салат?
Die Rechnung, bitte!|Счёт, пожалуйста!
Zusammen oder getrennt?|Вместе или раздельно?
Das macht zwölf Euro fünfzig.|С вас двенадцать евро пятьдесят.
Stimmt so!|Сдачи не надо!
`,
  gaps: `
Ich möchte {einen} Tee.|Я хотел(а) бы чай.|einen,ein,eine
Ich nehme {eine} Suppe.|Я возьму суп.|eine,einen,ein
Wir {möchten} bezahlen.|Мы хотели бы заплатить.|möchten,möchte,möchtest
Ich nehme {ein} Wasser.|Я возьму воду.|ein,einen,eine
Was {kostet} der Kuchen?|Сколько стоит торт?|kostet,kosten,kostest
Ich möchte {den} Salat.|Я бы хотел(а) этот салат.|den,der,dem
`,
  dialogTitle: 'Заказ в кафе',
  dialog: `
A:Guten Tag! Was möchten Sie?|Добрый день! Что Вы желаете?
B:Ich möchte einen Cappuccino, bitte.|Я бы хотел(а) капучино, пожалуйста.
A:Gern. Möchten Sie auch etwas essen?|С удовольствием. Хотите что-нибудь поесть?
B:Ja, ich nehme ein Stück Apfelkuchen.|Да, я возьму кусок яблочного пирога.
A:Sehr gern. … Bitte schön!|Хорошо. … Пожалуйста!
B:Danke! Die Rechnung, bitte.|Спасибо! Счёт, пожалуйста.
A:Das macht sieben Euro achtzig.|С вас семь евро восемьдесят.
B:Acht Euro. Stimmt so!|Восемь евро. Сдачи не надо!
`,
  roleplay: { role: 'официант в венском кафе', situation: 'Вы пришли в уютное кафе в Вене. Официант подходит к столику.', goal: 'Заказать напиток и десерт, спросить цену и попросить счёт' },
},
{
  id: 'a1-07', emoji: '⏰', title: 'Мой день', de: 'Mein Tag',
  goal: 'Говорить о распорядке дня и называть время',
  grammar: {
    title: 'Глаголы с отделяемой приставкой и время',
    points: [
      'Некоторые глаголы имеют **отделяемую приставку**: auf|stehen (вставать). Приставка уходит **в конец предложения**: Ich **stehe** um 7 Uhr **auf**.',
      'Частые: **aufstehen**, **anfangen** (начинать), **einkaufen** (делать покупки), **fernsehen** (смотреть ТВ), **anrufen** (звонить).',
      'Время: **Wie spät ist es?** — Es ist acht Uhr. **halb neun** = 8:30 («половина девятого»), **Viertel nach** acht = 8:15, **Viertel vor** neun = 8:45.',
      'Во сколько? — **um** acht Uhr.',
      'Порядок слов: глагол всегда на **2-м месте**: **Um 7 Uhr** stehe ich auf. (а не «Um 7 Uhr ich stehe»)',
    ],
  },
  words: `
aufstehen|вставать
frühstücken|завтракать
arbeiten|работать
anfangen|начинать
einkaufen|делать покупки
kochen|готовить
fernsehen|смотреть телевизор
schlafen|спать
die Uhr, -en|часы; (время) час
halb|половина
das Viertel, -|четверть
früh|рано
spät|поздно
dann|потом
`,
  phrases: `
Wie spät ist es?|Который час?
Es ist halb acht.|Сейчас половина восьмого.
Ich stehe um sieben Uhr auf.|Я встаю в семь часов.
Dann frühstücke ich.|Потом я завтракаю.
Die Arbeit fängt um neun Uhr an.|Работа начинается в девять.
Am Abend sehe ich fern.|Вечером я смотрю телевизор.
Ich kaufe nach der Arbeit ein.|Я делаю покупки после работы.
Um elf Uhr gehe ich schlafen.|В одиннадцать я иду спать.
`,
  gaps: `
Ich stehe um 6 Uhr {auf}.|Я встаю в 6 часов.|auf,an,ein
Der Film fängt um 8 Uhr {an}.|Фильм начинается в 8.|an,auf,ein
Am Samstag kaufe ich {ein}.|В субботу я делаю покупки.|ein,an,auf
Um 7 Uhr {frühstücke} ich.|В 7 я завтракаю.|frühstücke,ich frühstücke,frühstückst
8:30 – Es ist {halb} neun.|Половина девятого.|halb,Viertel,um
Ich komme {um} 10 Uhr.|Я приду в 10 часов.|um,am,im
`,
  dialogTitle: 'Когда встретимся?',
  dialog: `
A:Wann stehst du auf?|Когда ты встаёшь?
B:Ich stehe um halb sieben auf.|Я встаю в половине седьмого.
A:So früh! Wann fängt deine Arbeit an?|Так рано! Когда начинается твоя работа?
B:Meine Arbeit fängt um acht Uhr an.|Моя работа начинается в восемь.
A:Und was machst du am Abend?|А что ты делаешь вечером?
B:Ich koche und dann sehe ich fern.|Я готовлю, а потом смотрю телевизор.
A:Gehen wir morgen um sieben ins Kino?|Пойдём завтра в семь в кино?
B:Gute Idee! Bis morgen!|Хорошая идея! До завтра!
`,
  roleplay: { role: 'журналист студенческой газеты, который делает опрос «Мой обычный день»', situation: 'Вас на улице просят ответить на пару вопросов о вашем распорядке дня.', goal: 'Рассказать, когда вы встаёте, работаете, едите и ложитесь спать' },
},
{
  id: 'a1-08', emoji: '⚽', title: 'Хобби и свободное время', de: 'Freizeit und Hobbys',
  goal: 'Рассказать о хобби, сказать что вы умеете и чего не делаете',
  grammar: {
    title: 'gern, können и отрицание nicht',
    points: [
      '**gern** = «люблю делать»: Ich spiele **gern** Fußball. **lieber** = больше люблю, **am liebsten** = больше всего.',
      '**können** (уметь, мочь): ich **kann**, du **kannst**, er **kann**. Второй глагол — в конце в инфинитиве: Ich **kann** gut **schwimmen**.',
      '**nicht** отрицает глагол/прилагательное: Ich tanze **nicht**. **kein** — существительное: Ich habe **keine** Zeit.',
      'У некоторых глаголов меняется корень: lesen → du **liest**, er **liest**; fahren → du **fährst**; sprechen → er **spricht**.',
    ],
  },
  words: `
das Hobby, -s|хобби
die Freizeit|свободное время
spielen|играть
lesen|читать
schwimmen|плавать
tanzen|танцевать
singen|петь
fotografieren|фотографировать
Rad fahren|кататься на велосипеде
können|мочь, уметь
die Musik|музыка
das Buch, -¨er|книга
der Film, -e|фильм
die Zeit|время
oft|часто
nie|никогда
`,
  phrases: `
Was machst du in der Freizeit?|Что ты делаешь в свободное время?
Ich lese gern Bücher.|Я люблю читать книги.
Ich spiele gern Gitarre.|Я люблю играть на гитаре.
Kannst du schwimmen?|Ты умеешь плавать?
Ich kann nicht gut singen.|Я не умею хорошо петь.
Am liebsten fahre ich Rad.|Больше всего я люблю кататься на велосипеде.
Ich habe keine Zeit.|У меня нет времени.
Wir gehen oft ins Kino.|Мы часто ходим в кино.
`,
  gaps: `
Ich {kann} gut tanzen.|Я хорошо танцую (умею).|kann,kannst,können
{Kannst} du Gitarre spielen?|Ты умеешь играть на гитаре?|Kannst,Kann,Könnt
Er {liest} gern Krimis.|Он любит читать детективы.|liest,lest,lese
Ich habe {keine} Zeit.|У меня нет времени.|keine,nicht,kein
Ich schwimme {nicht} gern.|Я не люблю плавать.|nicht,kein,keine
Sie {fährt} gern Rad.|Она любит кататься на велосипеде.|fährt,fahrt,fahre
`,
  dialogTitle: 'Планы на выходные',
  dialog: `
A:Was machst du gern in der Freizeit?|Что ты любишь делать в свободное время?
B:Ich lese gern und ich fahre Rad.|Я люблю читать и кататься на велосипеде.
A:Ich spiele Tennis. Kannst du Tennis spielen?|Я играю в теннис. Ты умеешь играть в теннис?
B:Nein, leider nicht. Aber ich schwimme gern.|Нет, к сожалению. Но я люблю плавать.
A:Gehen wir am Samstag schwimmen?|Пойдём в субботу плавать?
B:Am Samstag habe ich keine Zeit. Am Sonntag?|В субботу у меня нет времени. В воскресенье?
A:Sonntag ist super!|Воскресенье — супер!
`,
  roleplay: { role: 'новый знакомый в спортклубе по имени Tim', situation: 'Вы познакомились в раздевалке спортклуба.', goal: 'Рассказать о 2–3 хобби, сказать, что вы умеете и чего не умеете, договориться о встрече' },
},
{
  id: 'a1-09', emoji: '🏠', title: 'Квартира', de: 'Meine Wohnung',
  goal: 'Описать квартиру и комнаты, сказать «есть / нет»',
  grammar: {
    title: 'es gibt и прилагательные после sein',
    points: [
      '**Es gibt** + Akkusativ = «есть, имеется»: In der Küche **gibt es einen** Tisch.',
      'Прилагательное после sein не меняется: Die Wohnung **ist groß**. Das Zimmer **ist hell**.',
      'Слишком = **zu**: Die Miete ist **zu** teuer.',
      'Местоимения для вещей по роду: der Tisch → **er**, die Lampe → **sie**, das Bett → **es**: Wie ist das Sofa? — **Es** ist bequem.',
    ],
  },
  words: `
die Wohnung, -en|квартира
das Haus, -¨er|дом
das Zimmer, -|комната
die Küche, -n|кухня
das Bad, -¨er|ванная
das Schlafzimmer, -|спальня
der Balkon, -e|балкон
der Tisch, -e|стол
der Stuhl, -¨e|стул
das Bett, -en|кровать
das Sofa, -s|диван
die Lampe, -n|лампа
groß|большой
klein|маленький
hell|светлый
teuer|дорогой
billig|дешёвый
die Miete, -n|арендная плата
`,
  phrases: `
Meine Wohnung hat drei Zimmer.|В моей квартире три комнаты.
Die Küche ist klein, aber hell.|Кухня маленькая, но светлая.
Es gibt einen Balkon.|Есть балкон.
Im Schlafzimmer gibt es ein Bett und einen Schrank.|В спальне есть кровать и шкаф.
Wie hoch ist die Miete?|Какая арендная плата?
Die Wohnung ist zu teuer.|Квартира слишком дорогая.
Das Sofa ist neu und bequem.|Диван новый и удобный.
Ich wohne im dritten Stock.|Я живу на третьем этаже (по-нашему — на четвёртом).
`,
  gaps: `
In der Küche gibt es {einen} Tisch.|На кухне есть стол.|einen,ein,eine
Es {gibt} keinen Balkon.|Балкона нет.|gibt,ist,hat
Wie ist das Bett? – {Es} ist bequem.|Какая кровать? — Удобная.|Es,Er,Sie
Wie ist die Lampe? – {Sie} ist modern.|Какая лампа? — Современная.|Sie,Er,Es
Die Miete ist {zu} hoch.|Аренда слишком высокая.|zu,sehr,so
`,
  dialogTitle: 'Осмотр квартиры',
  dialog: `
A:Hier ist das Wohnzimmer. Es ist groß und hell.|Вот гостиная. Она большая и светлая.
B:Schön! Gibt es auch einen Balkon?|Красиво! Есть и балкон?
A:Ja, der Balkon ist hier. Und das ist die Küche.|Да, балкон здесь. А это кухня.
B:Die Küche ist sehr klein.|Кухня очень маленькая.
A:Ja, aber sie ist neu.|Да, но она новая.
B:Wie hoch ist die Miete?|Какая арендная плата?
A:Achthundert Euro warm.|Восемьсот евро с коммунальными.
B:Hm, das ist ein bisschen teuer.|Хм, это немного дорого.
`,
  roleplay: { role: 'арендодатель Herr Klein, который показывает квартиру', situation: 'Вы смотрите квартиру в Лейпциге, которую хотите снять.', goal: 'Спросить о комнатах, балконе, мебели и цене аренды' },
},
{
  id: 'a1-10', emoji: '🗺️', title: 'В городе', de: 'In der Stadt',
  goal: 'Спросить дорогу, понять объяснения и использовать повелительное наклонение',
  grammar: {
    title: 'Императив и предлоги места',
    points: [
      'Вежливая просьба (Sie): глагол + Sie: **Gehen Sie** geradeaus! **Nehmen Sie** den Bus!',
      'Для «ты»: основа глагола: **Geh** geradeaus! **Nimm** die U-Bahn! **Komm** mit!',
      'Где? **Wo ist** der Bahnhof? Куда? **Wie komme ich zum** Bahnhof / **zur** Post? (zu + dem = **zum**, zu + der = **zur**).',
      'Транспорт: **mit dem** Bus, **mit der** U-Bahn, **mit dem** Fahrrad, **zu Fuß** (пешком).',
    ],
  },
  words: `
der Bahnhof, -¨e|вокзал
die Post|почта
die Bank, -en|банк
die Apotheke, -n|аптека
der Supermarkt, -¨e|супермаркет
die Haltestelle, -n|остановка
die Straße, -n|улица
die Ampel, -n|светофор
geradeaus|прямо
links|налево
rechts|направо
weit|далеко
nah|близко
der Bus, -se|автобус
die U-Bahn, -en|метро
zu Fuß|пешком
`,
  phrases: `
Entschuldigung, wo ist der Bahnhof?|Извините, где вокзал?
Wie komme ich zur Post?|Как мне пройти к почте?
Gehen Sie geradeaus und dann links.|Идите прямо, а потом налево.
An der Ampel gehen Sie rechts.|На светофоре поверните направо.
Ist das weit?|Это далеко?
Nein, nur fünf Minuten zu Fuß.|Нет, всего пять минут пешком.
Nehmen Sie den Bus Nummer zwölf.|Садитесь на автобус номер двенадцать.
Die Apotheke ist neben der Bank.|Аптека рядом с банком.
`,
  gaps: `
{Gehen} Sie geradeaus!|Идите прямо!|Gehen,Geht,Gehst
Wie komme ich {zum} Bahnhof?|Как пройти к вокзалу?|zum,zur,zu
Wie komme ich {zur} Apotheke?|Как пройти к аптеке?|zur,zum,zu
Ich fahre {mit} dem Bus.|Я еду на автобусе.|mit,in,zu
{Nimm} die U-Bahn!|Садись на метро!|Nimm,Nehmen,Nehmt
Das ist nicht weit, nur fünf Minuten zu {Fuß}.|Недалеко, пять минут пешком.|Fuß,Bus,Weg
`,
  dialogTitle: 'Где вокзал?',
  dialog: `
B:Entschuldigung! Wie komme ich zum Bahnhof?|Извините! Как мне пройти к вокзалу?
A:Zum Bahnhof? Gehen Sie hier geradeaus.|К вокзалу? Идите здесь прямо.
B:Geradeaus. Und dann?|Прямо. А потом?
A:An der Ampel gehen Sie links. Dann sehen Sie den Bahnhof.|На светофоре налево. Потом увидите вокзал.
B:Ist das weit?|Это далеко?
A:Nein, zehn Minuten zu Fuß. Oder nehmen Sie den Bus.|Нет, десять минут пешком. Или садитесь на автобус.
B:Vielen Dank!|Большое спасибо!
A:Bitte, gern!|Пожалуйста!
`,
  roleplay: { role: 'местный житель на улице Гейдельберга', situation: 'Вы турист и ищете вокзал, аптеку и хорошее кафе.', goal: 'Спросить дорогу минимум к двум местам и понять ответ' },
},
{
  id: 'a1-11', emoji: '🛍️', title: 'Покупки и одежда', de: 'Einkaufen und Kleidung',
  goal: 'Купить одежду: размер, цвет, цена; использовать «этот» и «какой»',
  grammar: {
    title: 'Цвета, welcher? и dieser',
    points: [
      '**Welcher** (какой?) и **dieser** (этот) склоняются как der/die/das: **welcher** Pullover? — **dieser** Pullover; **welche** Jacke? — **diese** Jacke; **welches** Hemd? — **dieses** Hemd.',
      'В Akkusativ мужской род: Ich nehme **diesen** Rock.',
      'Местоимения в Akkusativ: der Mantel → **ihn**, die Hose → **sie**, das Kleid → **es**: Ich nehme **ihn**!',
      'Цвета: rot, blau, grün, gelb, schwarz, weiß, grau, braun. **Die Hose ist zu groß** — брюки слишком большие.',
    ],
  },
  words: `
die Kleidung|одежда
die Hose, -n|брюки
das Hemd, -en|рубашка
das Kleid, -er|платье
der Pullover, -|свитер
die Jacke, -n|куртка
der Schuh, -e|ботинок, туфля
die Größe, -n|размер
anprobieren|примерять
passen|подходить (по размеру)
rot|красный
blau|синий
schwarz|чёрный
weiß|белый
grün|зелёный
`,
  phrases: `
Ich suche eine Jacke.|Я ищу куртку.
Welche Größe haben Sie?|Какой у Вас размер?
Kann ich das anprobieren?|Можно это примерить?
Die Hose passt nicht.|Брюки не подходят.
Haben Sie das auch in Blau?|У Вас есть это и в синем?
Wie viel kostet dieser Pullover?|Сколько стоит этот свитер?
Ich nehme ihn.|Я его беру.
Kann ich mit Karte bezahlen?|Могу я заплатить картой?
`,
  gaps: `
{Welche} Farbe möchten Sie?|Какой цвет Вы хотите?|Welche,Welcher,Welches
Ich nehme {diesen} Mantel.|Я беру это пальто.|diesen,dieser,dieses
{Dieses} Kleid ist schön.|Это платье красивое.|Dieses,Dieser,Diese
Der Pullover ist toll. Ich nehme {ihn}.|Свитер классный. Беру его.|ihn,er,es
Die Schuhe sind zu klein. Sie {passen} nicht.|Туфли слишком малы. Не подходят.|passen,passt,passe
`,
  dialogTitle: 'В магазине одежды',
  dialog: `
A:Guten Tag! Kann ich Ihnen helfen?|Добрый день! Могу я Вам помочь?
B:Ja, ich suche einen Pullover.|Да, я ищу свитер.
A:Welche Größe haben Sie?|Какой у Вас размер?
B:Größe M. Haben Sie den Pullover in Blau?|Размер M. У Вас есть этот свитер в синем?
A:Ja, hier bitte. Die Kabine ist dort.|Да, вот, пожалуйста. Примерочная там.
B:Er passt gut! Wie viel kostet er?|Он хорошо сидит! Сколько он стоит?
A:Neunundvierzig Euro.|Сорок девять евро.
B:Gut, ich nehme ihn.|Хорошо, я его беру.
`,
  roleplay: { role: 'продавец в магазине одежды в Мюнхене', situation: 'Вы хотите купить подарок и себе что-нибудь тёплое на зиму.', goal: 'Найти вещь нужного цвета и размера, примерить и купить' },
},
{
  id: 'a1-12', emoji: '📅', title: 'Календарь и погода', de: 'Termine und Wetter',
  goal: 'Назначить встречу, назвать день, месяц, время года и описать погоду',
  grammar: {
    title: 'am, im, um и порядковые числа',
    points: [
      '**am** + день/часть дня: am Montag, am Abend, am Wochenende. **im** + месяц/время года: im Mai, im Sommer. **um** + время: um 3 Uhr.',
      'Даты: **der erste** (1-й), **der zweite**, **der dritte**, der vierte… с 20 — **-ste**: der zwanzigste. «Первого мая» = **am ersten Mai**.',
      'Погода: **Es regnet** (идёт дождь), **es schneit** (снег), **die Sonne scheint** (светит солнце), **es ist kalt / warm / windig**.',
      'Все дни недели, месяцы и времена года — **der**.',
    ],
  },
  words: `
der Montag|понедельник
der Dienstag|вторник
der Mittwoch|среда
der Donnerstag|четверг
der Freitag|пятница
der Samstag|суббота
der Sonntag|воскресенье
das Wochenende, -n|выходные
der Termin, -e|встреча (по записи)
der Sommer|лето
der Winter|зима
das Wetter|погода
die Sonne|солнце
der Regen|дождь
kalt|холодный
warm|тёплый
`,
  phrases: `
Hast du am Freitag Zeit?|У тебя есть время в пятницу?
Am Montag kann ich nicht.|В понедельник я не могу.
Wie wäre es mit Mittwoch um drei?|Как насчёт среды в три?
Mein Geburtstag ist am fünften Mai.|Мой день рождения пятого мая.
Wie ist das Wetter heute?|Какая сегодня погода?
Es regnet und es ist kalt.|Идёт дождь, и холодно.
Im Sommer ist es oft sehr warm.|Летом часто очень тепло.
Die Sonne scheint!|Светит солнце!
`,
  gaps: `
Ich komme {am} Dienstag.|Я приду во вторник.|am,im,um
Wir fahren {im} August nach Italien.|Мы едем в Италию в августе.|im,am,um
Der Kurs beginnt {um} neun Uhr.|Курс начинается в девять.|um,am,im
Heute {regnet} es.|Сегодня идёт дождь.|regnet,Regen,regnen
Mein Geburtstag ist am {ersten} März.|Мой день рождения 1 марта.|ersten,einen,eins
{Im} Winter schneit es oft.|Зимой часто идёт снег.|Im,Am,Um
`,
  dialogTitle: 'Договоримся о встрече',
  dialog: `
A:Hast du am Wochenende Zeit?|У тебя есть время на выходных?
B:Am Samstag arbeite ich. Aber am Sonntag habe ich Zeit.|В субботу я работаю. Но в воскресенье есть время.
A:Super! Machen wir ein Picknick im Park?|Супер! Устроим пикник в парке?
B:Gern! Wie wird das Wetter?|С удовольствием! Какая будет погода?
A:Die Sonne scheint, es wird warm – fünfundzwanzig Grad!|Будет солнце, тепло — двадцать пять градусов!
B:Toll! Um wie viel Uhr?|Здорово! Во сколько?
A:Um zwölf Uhr am Eingang?|В двенадцать у входа?
B:Perfekt, bis Sonntag!|Отлично, до воскресенья!
`,
  roleplay: { role: 'администратор стоматологической клиники', situation: 'Вы звоните, чтобы записаться к зубному врачу.', goal: 'Договориться о дне и времени, которые вам подходят' },
},
{
  id: 'a1-13', emoji: '🩺', title: 'Тело и здоровье', de: 'Körper und Gesundheit',
  goal: 'Сказать, что болит, понять советы врача; модальные глаголы müssen, dürfen, sollen',
  grammar: {
    title: 'Модальные глаголы',
    points: [
      'Модальный глагол на 2-м месте, основной глагол — **в конце** в инфинитиве: Sie **müssen** viel Wasser **trinken**.',
      '**müssen** — должен (необходимость): ich muss, du musst, er muss. **dürfen** — можно (разрешение): Sie dürfen nicht rauchen. **sollen** — следует (совет/указание другого): Ich soll im Bett bleiben.',
      '**wollen** — хотеть (намерение): ich will, du willst.',
      'Что болит: **Mein Kopf tut weh.** / **Ich habe Kopfschmerzen.** / **Mir ist schlecht** (меня тошнит).',
    ],
    table: [
      ['', 'müssen', 'dürfen', 'sollen', 'wollen'],
      ['ich', 'muss', 'darf', 'soll', 'will'],
      ['du', 'musst', 'darfst', 'sollst', 'willst'],
      ['er/sie', 'muss', 'darf', 'soll', 'will'],
      ['wir/sie', 'müssen', 'dürfen', 'sollen', 'wollen'],
    ],
  },
  words: `
der Körper, -|тело
der Kopf, -¨e|голова
der Bauch, -¨e|живот
der Rücken, -|спина
der Hals, -¨e|горло, шея
das Auge, -n|глаз
das Bein, -e|нога
die Hand, -¨e|рука (кисть)
der Arzt, -¨e|врач
krank|больной
gesund|здоровый
das Fieber|температура (жар)
die Tablette, -n|таблетка
wehtun|болеть
müssen|быть должным
dürfen|мочь (иметь разрешение)
`,
  phrases: `
Was fehlt Ihnen?|Что Вас беспокоит?
Mein Kopf tut weh.|У меня болит голова.
Ich habe Fieber und Halsschmerzen.|У меня температура и болит горло.
Ich bin krank.|Я болен.
Sie müssen im Bett bleiben.|Вам нужно оставаться в постели.
Sie dürfen keinen Sport machen.|Вам нельзя заниматься спортом.
Nehmen Sie dreimal täglich eine Tablette.|Принимайте по таблетке три раза в день.
Gute Besserung!|Выздоравливай!
`,
  gaps: `
Ich {muss} heute zum Arzt gehen.|Мне нужно сегодня к врачу.|muss,musst,müssen
Hier {darf} man nicht rauchen.|Здесь нельзя курить.|darf,dürfen,darfst
Du {sollst} viel Tee trinken.|Тебе следует пить много чая.|sollst,soll,sollt
Mein Bauch tut {weh}.|У меня болит живот.|weh,krank,schlecht
Sie müssen drei Tage im Bett {bleiben}.|Вам нужно три дня лежать.|bleiben,bleibt,bleibe
Meine Beine {tun} weh.|У меня болят ноги.|tun,tut,tue
`,
  dialogTitle: 'У врача',
  dialog: `
A:Guten Tag! Was fehlt Ihnen?|Добрый день! Что Вас беспокоит?
B:Ich habe Kopfschmerzen und Fieber.|У меня болит голова и температура.
A:Seit wann?|С какого времени?
B:Seit zwei Tagen. Und mein Hals tut weh.|Два дня. И горло болит.
A:Sie haben eine Grippe. Sie müssen im Bett bleiben und viel trinken.|У Вас грипп. Вам нужно лежать и много пить.
B:Darf ich arbeiten?|Мне можно работать?
A:Nein, diese Woche nicht. Hier ist ein Rezept.|Нет, на этой неделе нельзя. Вот рецепт.
B:Danke, Frau Doktor. Auf Wiedersehen!|Спасибо, доктор. До свидания!
`,
  roleplay: { role: 'терапевт Dr. Wagner на приёме', situation: 'Вы простудились и пришли к врачу в Германии.', goal: 'Описать симптомы, спросить, можно ли работать и заниматься спортом' },
},
];
