import type { LessonSrc } from './types';

export const B1: LessonSrc[] = [
{
  id: 'b1-01', emoji: '🧑‍🤝‍🧑', title: 'Люди, которые…', de: 'Menschen, die ich mag',
  goal: 'Точно описывать людей и вещи с помощью относительных придаточных',
  grammar: {
    title: 'Relativsätze — относительные придаточные',
    points: [
      'Относительное местоимение (= «который») похоже на артикль: **der, die, das, die** (мн. ч.). Род берём от слова, к которому относимся, а **падеж — по роли в придаточном**.',
      'Der Mann, **der** dort steht, ist mein Chef. (Nom.) / Der Mann, **den** ich gestern getroffen habe… (Akk.) / Der Mann, **dem** ich helfe… (Dat.)',
      'Глагол — в конце придаточного. Придаточное выделяется запятыми.',
      'С предлогом: Die Frau, **mit der** ich arbeite… Das Haus, **in dem** ich wohne… (= **wo** ich wohne).',
      'Внимание: Dativ мн. ч. — **denen**: Die Freunde, mit **denen** ich reise…',
    ],
    table: [
      ['', 'м.', 'ж.', 'ср.', 'мн.'],
      ['Nom.', 'der', 'die', 'das', 'die'],
      ['Akk.', 'den', 'die', 'das', 'die'],
      ['Dat.', 'dem', 'der', 'dem', 'denen'],
    ],
  },
  words: `
der Mensch, -en|человек
die Beziehung, -en|отношения
die Freundschaft, -en|дружба
der Bekannte, -n|знакомый
vertrauen|доверять
sich verlassen auf|полагаться на
zuverlässig|надёжный
hilfsbereit|готовый помочь
neugierig|любопытный
selbstbewusst|уверенный в себе
die Eigenschaft, -en|качество, черта
kennenlernen|знакомиться
sich verstehen|ладить, понимать друг друга
der Streit|ссора
`,
  phrases: `
Ein guter Freund ist jemand, der immer zuhört.|Хороший друг — это тот, кто всегда выслушает.
Das ist die Frau, die ich im Urlaub kennengelernt habe.|Это женщина, с которой я познакомился в отпуске.
Der Kollege, dem ich geholfen habe, hat mir Schokolade geschenkt.|Коллега, которому я помог, подарил мне шоколад.
Ich suche eine Wohnung, die nicht so teuer ist.|Я ищу квартиру, которая не так дорога.
Das ist das Café, in dem wir uns zum ersten Mal getroffen haben.|Это кафе, в котором мы впервые встретились.
Die Leute, mit denen ich arbeite, sind sehr hilfsbereit.|Люди, с которыми я работаю, очень отзывчивые.
Auf meine Schwester kann ich mich immer verlassen.|На сестру я всегда могу положиться.
Wir verstehen uns sehr gut.|Мы очень хорошо ладим.
`,
  gaps: `
Der Mann, {der} dort sitzt, ist mein Lehrer.|Мужчина, который там сидит, — мой учитель.|der,den,dem
Das Buch, {das} ich lese, ist spannend.|Книга, которую я читаю, захватывающая.|das,die,dem
Die Frau, {der} ich helfe, ist meine Nachbarin.|Женщина, которой я помогаю, — моя соседка.|der,die,denen
Der Film, {den} wir gesehen haben, war super.|Фильм, который мы посмотрели, был супер.|den,der,dem
Das sind die Freunde, mit {denen} ich reise.|Это друзья, с которыми я путешествую.|denen,den,die
Die Stadt, in {der} ich geboren bin, ist klein.|Город, в котором я родился, маленький.|der,die,dem
`,
  dialogTitle: 'Лучший друг',
  dialog: `
A:Wer ist eigentlich dein bester Freund?|А кто вообще твой лучший друг?
B:Das ist Daniel, den ich schon seit der Schule kenne.|Это Даниэль, которого я знаю ещё со школы.
A:Was magst du an ihm?|Что тебе в нём нравится?
B:Er ist jemand, auf den man sich immer verlassen kann.|Он человек, на которого всегда можно положиться.
A:Habt ihr euch nie gestritten?|Вы никогда не ссорились?
B:Doch, einmal – wegen eines Mädchens, das wir beide toll fanden!|Было разок — из-за девушки, которая нам обоим нравилась!
A:Und wer hat gewonnen?|И кто победил?
B:Keiner! Sie hat einen Typen geheiratet, den wir beide nicht kannten.|Никто! Она вышла за парня, которого мы оба не знали.
`,
  roleplay: { role: 'психолог-коуч, проводящий беседу о дружбе и отношениях', situation: 'Вы участвуете в тренинге «Люди в моей жизни».', goal: 'Описать 3 важных человека с помощью относительных придаточных (der/den/dem…)' },
},
{
  id: 'b1-02', emoji: '📜', title: 'Истории и легенды', de: 'Geschichten erzählen',
  goal: 'Рассказывать истории в письменном прошедшем времени (Präteritum)',
  grammar: {
    title: 'Präteritum — время рассказов',
    points: [
      'В книгах, новостях, сказках прошлое — в **Präteritum**: Es **war** einmal ein König…',
      'Слабые глаголы: основа + **-te**: machen → mach**te**, wohnen → wohn**te**, arbeiten → arbeit**ete**.',
      'Сильные глаголы меняют корень, в 1-м/3-м лице без окончания: gehen → **ging**, kommen → **kam**, sehen → **sah**, finden → **fand**, sprechen → **sprach**, nehmen → **nahm**, laufen → **lief**, sitzen → **saß**, stehen → **stand**, rufen → **rief**.',
      'Смешанные: denken → **dachte**, bringen → **brachte**, wissen → **wusste**, kennen → **kannte**.',
      'Окончания: ich ging, du ging**st**, er ging, wir ging**en**, ihr ging**t**, sie ging**en**.',
    ],
    table: [
      ['Инфинитив', 'Präteritum', 'Perfekt'],
      ['gehen', 'ging', 'ist gegangen'],
      ['kommen', 'kam', 'ist gekommen'],
      ['sehen', 'sah', 'hat gesehen'],
      ['finden', 'fand', 'hat gefunden'],
      ['denken', 'dachte', 'hat gedacht'],
      ['werden', 'wurde', 'ist geworden'],
    ],
  },
  words: `
das Märchen, -|сказка
die Geschichte, -n|история
der König, -e|король
die Prinzessin, -nen|принцесса
der Wald, -¨er|лес
die Hexe, -n|ведьма
plötzlich|вдруг
endlich|наконец
ging|шёл (gehen)
kam|пришёл (kommen)
sah|увидел (sehen)
fand|нашёл (finden)
sagte|сказал (sagen)
dachte|думал (denken)
lief|бежал (laufen)
wurde|стал (werden)
`,
  phrases: `
Es war einmal ein armer Müller.|Жил-был бедный мельник.
Eines Tages ging er in den Wald.|Однажды он пошёл в лес.
Plötzlich sah er ein kleines Haus.|Вдруг он увидел маленький домик.
Die Tür war offen, also trat er ein.|Дверь была открыта, поэтому он вошёл.
Er dachte, dass niemand zu Hause war.|Он думал, что никого нет дома.
Da kam eine alte Frau aus der Küche.|Тут из кухни вышла старуха.
Sie lachte und sagte kein Wort.|Она засмеялась и не сказала ни слова.
Und wenn sie nicht gestorben sind, dann leben sie noch heute.|И если они не умерли, то живут и сейчас.
`,
  gaps: `
Es {war} einmal eine Prinzessin.|Жила-была принцесса.|war,ist,wäre
Der Junge {ging} in den Wald.|Мальчик пошёл в лес.|ging,gehte,gang
Plötzlich {sah} er einen Wolf.|Вдруг он увидел волка.|sah,seht,sehte
Sie {fand} einen goldenen Schlüssel.|Она нашла золотой ключ.|fand,findete,fund
Wir {wohnten} damals in Dresden.|Мы жили тогда в Дрездене.|wohnten,wohnen,wohnte
Er {dachte} lange nach.|Он долго размышлял.|dachte,denkte,dacht
`,
  dialogTitle: 'Странный случай',
  dialog: `
A:Du siehst blass aus. Was ist passiert?|Ты бледный. Что случилось?
B:Gestern Nacht hörte ich ein Geräusch in der Küche.|Вчера ночью я услышал шум на кухне.
A:Oh nein! Was hast du gemacht?|О нет! Что ты сделал?
B:Ich nahm eine Taschenlampe und ging langsam nach unten.|Я взял фонарик и медленно спустился вниз.
A:Und? Wer war da?|И? Кто там был?
B:Der Kühlschrank stand offen, und vor ihm saß … meine Katze mit einer Wurst!|Холодильник был открыт, а перед ним сидела… моя кошка с колбасой!
A:Haha! Was für eine Geschichte!|Ха-ха! Вот это история!
`,
  roleplay: { role: 'слушатель у костра, который просит рассказать страшную или смешную историю', situation: 'Вечер у костра в кемпинге, все по очереди рассказывают истории.', goal: 'Рассказать связную историю в Präteritum (минимум 6 предложений), отвечая на уточняющие вопросы' },
},
{
  id: 'b1-03', emoji: '♻️', title: 'Экология', de: 'Umwelt und Recycling',
  goal: 'Описывать процессы: пассивный залог',
  grammar: {
    title: 'Passiv: werden + Partizip II',
    points: [
      'Пассив важен, когда интересно **действие**, а не кто его делает: Der Müll **wird getrennt**. (Мусор сортируется.)',
      'Präsens: **werden** (2-е место) + Partizip II (в конце): Papier **wird** recycelt. Flaschen **werden** gesammelt.',
      'Präteritum: **wurde**: Das Haus **wurde** 1900 **gebaut**.',
      'Кем? **von** + Dativ: Die Bäume werden **von** Freiwilligen gepflanzt.',
      'С модальными: muss + Partizip II + **werden**: Plastik **muss** reduziert **werden**.',
    ],
    table: [
      ['', 'werden', 'Präteritum'],
      ['ich', 'werde', 'wurde'],
      ['du', 'wirst', 'wurdest'],
      ['er/sie/es', 'wird', 'wurde'],
      ['wir/sie', 'werden', 'wurden'],
    ],
  },
  words: `
die Umwelt|окружающая среда
der Müll|мусор
trennen|разделять, сортировать
recyceln|перерабатывать
die Verpackung, -en|упаковка
das Plastik|пластик
die Energie, -n|энергия
sparen|экономить
der Klimawandel|изменение климата
schützen|защищать
verschmutzen|загрязнять
die Luft|воздух
erneuerbar|возобновляемый
nachhaltig|устойчивый, экологичный
die Mülltonne, -n|мусорный бак
das Pfand|залог (за бутылку)
`,
  phrases: `
In Deutschland wird der Müll getrennt.|В Германии мусор сортируют.
Papier wird in die blaue Tonne geworfen.|Бумагу выбрасывают в синий бак.
Für Flaschen wird Pfand bezahlt.|За бутылки платится залог.
Plastik muss reduziert werden.|Пластик нужно сокращать.
Die Luft wird durch Autos verschmutzt.|Воздух загрязняется автомобилями.
Hier wurde ein neuer Park gebaut.|Здесь построили новый парк.
Wie kann Energie gespart werden?|Как можно экономить энергию?
Ich versuche, nachhaltig zu leben.|Я стараюсь жить экологично.
`,
  gaps: `
Der Müll {wird} jeden Montag abgeholt.|Мусор вывозят каждый понедельник.|wird,werden,ist
Die Flaschen werden {gesammelt}.|Бутылки собирают.|gesammelt,sammeln,gesammelten
Das Haus {wurde} 1890 gebaut.|Дом построен в 1890 году.|wurde,wird,würde
Die Bäume werden {von} Kindern gepflanzt.|Деревья сажают дети.|von,durch,mit
Energie muss gespart {werden}.|Энергию нужно экономить.|werden,wird,worden
Hier {werden} Bio-Produkte verkauft.|Здесь продаются био-продукты.|werden,wird,wurde
`,
  dialogTitle: 'Новый сосед и мусор',
  dialog: `
A:Entschuldigung, Sie haben die Flasche in den Restmüll geworfen.|Извините, Вы выбросили бутылку в общий мусор.
B:Oh! Wie wird der Müll hier denn getrennt?|Ой! А как здесь сортируют мусор?
A:Papier kommt in die blaue Tonne, Verpackungen in die gelbe.|Бумага — в синий бак, упаковка — в жёлтый.
B:Und was wird mit Glas gemacht?|А что делают со стеклом?
A:Glas wird zum Container an der Ecke gebracht. Und Pfandflaschen gibt man im Supermarkt zurück.|Стекло относят в контейнер на углу. А бутылки с залогом сдают в супермаркете.
B:Danke! Das wusste ich nicht. Ich bin erst letzte Woche eingezogen.|Спасибо! Я не знал. Я въехал только на прошлой неделе.
`,
  roleplay: { role: 'активист экологической организации, проводящий опрос на улице', situation: 'Опрос о привычках экономии ресурсов и сортировке мусора.', goal: 'Объяснить, как у вас сортируется мусор и экономится энергия, используя пассив' },
},
{
  id: 'b1-04', emoji: '🌠', title: 'Мечты и желания', de: 'Wünsche und Träume',
  goal: 'Говорить о нереальном: если бы…, я бы…',
  grammar: {
    title: 'Konjunktiv II — нереальные условия',
    points: [
      'Нереальное условие: **Wenn** ich reich **wäre**, **würde** ich um die Welt **reisen**.',
      'Формы: **wäre** (sein), **hätte** (haben), **könnte**, **müsste**, **dürfte**, **wüsste** (wissen), **käme** (kommen), **ginge** (gehen). Для остальных глаголов — **würde + инфинитив**.',
      'Желание: **Wenn ich doch** mehr Zeit **hätte**! / **Ich wünschte**, ich **könnte** fliegen.',
      'Совет: **An deiner Stelle würde ich** … (На твоём месте я бы…)',
      'Порядок: придаточное с wenn первым → главное начинается с глагола: Wenn ich Zeit hätte, **würde** ich kommen.',
    ],
  },
  words: `
der Wunsch, -¨e|желание
der Traum, -¨e|мечта, сон
träumen|мечтать, видеть сон
wäre|был бы
hätte|имел бы
würde|бы (вспомогательный)
reich|богатый
die Weltreise, -n|кругосветное путешествие
die Insel, -n|остров
im Lotto gewinnen|выиграть в лотерею
kündigen|уволиться
die Fähigkeit, -en|способность
unsichtbar|невидимый
an deiner Stelle|на твоём месте
`,
  phrases: `
Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.|Если бы я был богат, я бы купил дом у моря.
Was würdest du machen, wenn du im Lotto gewinnen würdest?|Что бы ты сделал, если бы выиграл в лотерею?
Wenn ich mehr Zeit hätte, würde ich Gitarre lernen.|Если бы у меня было больше времени, я бы учился играть на гитаре.
Ich wünschte, ich könnte fliegen.|Хотел бы я уметь летать.
An deiner Stelle würde ich den Job wechseln.|На твоём месте я бы сменил работу.
Es wäre schön, wenn du mitkommen könntest.|Было бы здорово, если бы ты смог пойти с нами.
Wenn ich unsichtbar wäre, würde ich ins Kino gehen, ohne zu bezahlen.|Если бы я был невидимкой, я бы ходил в кино бесплатно.
Hätte ich das nur gewusst!|Знать бы мне это раньше!
`,
  gaps: `
Wenn ich Zeit {hätte}, würde ich dich besuchen.|Если бы у меня было время, я бы тебя навестил.|hätte,habe,hatte
Wenn er hier {wäre}, wäre alles einfacher.|Если бы он был здесь, всё было бы проще.|wäre,war,ist
Ich {würde} gern in Italien leben.|Я бы хотел жить в Италии.|würde,wurde,werde
An deiner Stelle {würde} ich zum Arzt gehen.|На твоём месте я бы пошёл к врачу.|würde,werde,wäre
Ich wünschte, ich {könnte} besser singen.|Хотел бы я петь лучше.|könnte,kann,konnte
Wenn ich das {wüsste}, würde ich es dir sagen.|Если бы я это знал, я бы тебе сказал.|wüsste,weiß,wusste
`,
  dialogTitle: 'Если бы…',
  dialog: `
A:Stell dir vor, du gewinnst eine Million. Was würdest du machen?|Представь, ты выиграл миллион. Что бы ты сделал?
B:Zuerst würde ich meinen Job kündigen!|Сначала я бы уволился!
A:Haha, und dann?|Ха-ха, а потом?
B:Dann würde ich eine Weltreise machen. Und du?|Потом я бы отправился в кругосветку. А ты?
A:Ich würde meinen Eltern ein Haus kaufen. Und wenn noch Geld übrig wäre, würde ich ein Café eröffnen.|Я бы купил родителям дом. А если бы остались деньги, открыл бы кафе.
B:Ein Café? Da würde ich jeden Tag kommen!|Кафе? Я бы приходил туда каждый день!
`,
  roleplay: { role: 'ведущий весёлого подкаста «Was wäre, wenn…?»', situation: 'Вы гость подкаста, ведущий задаёт фантастические вопросы.', goal: 'Ответить на 4 вопроса «что бы ты сделал, если бы…» в Konjunktiv II и задать свой' },
},
{
  id: 'b1-05', emoji: '🎯', title: 'Цели и планы', de: 'Ziele und Pläne',
  goal: 'Выражать цель и намерение: zu + Infinitiv, um…zu, damit',
  grammar: {
    title: 'Инфинитив с zu, um … zu, damit',
    points: [
      'После многих глаголов и выражений — **zu + инфинитив** в конце: Ich habe vor, Spanisch **zu lernen**. Es ist wichtig, regelmäßig **zu üben**. Hast du Lust, ins Kino **zu gehen**?',
      'С отделяемой приставкой **zu** внутри: anzufangen, aufzustehen, einzukaufen.',
      'Цель «чтобы»: **um … zu**, если субъект один: Ich lerne Deutsch, **um** in Deutschland **zu studieren**.',
      '**damit**, если субъекты разные: Ich spreche langsam, **damit** du mich **verstehst**.',
      'Модальные глаголы — **без zu**: Ich will lernen (не «zu lernen»).',
    ],
  },
  words: `
das Ziel, -e|цель
der Plan, -¨e|план
vorhaben|намереваться
versuchen|пытаться
beschließen|решать
sich vornehmen|ставить себе цель
erreichen|достигать
aufhören|прекращать
die Prüfung, -en|экзамен
bestehen|сдать (экзамен)
um … zu|чтобы (одно лицо)
damit|чтобы (разные лица)
regelmäßig|регулярно
die Motivation|мотивация
`,
  phrases: `
Ich habe vor, nächstes Jahr in Wien zu studieren.|Я планирую в следующем году учиться в Вене.
Ich versuche, jeden Tag zwanzig Minuten zu lernen.|Я стараюсь заниматься каждый день по двадцать минут.
Ich lerne Deutsch, um bessere Chancen im Beruf zu haben.|Я учу немецкий, чтобы иметь лучшие шансы в профессии.
Ich habe beschlossen, mit dem Rauchen aufzuhören.|Я решил бросить курить.
Es ist nicht leicht, früh aufzustehen.|Нелегко рано вставать.
Ich erkläre es noch einmal, damit alle es verstehen.|Объясню ещё раз, чтобы все поняли.
Ich habe mir vorgenommen, mehr Sport zu machen.|Я решил больше заниматься спортом.
Um die Prüfung zu bestehen, muss ich viel üben.|Чтобы сдать экзамен, мне нужно много практиковаться.
`,
  gaps: `
Ich habe keine Lust, heute {zu kochen}.|Мне не хочется сегодня готовить.|zu kochen,kochen,gekocht
Er hat vergessen, die Tür {abzuschließen}.|Он забыл запереть дверь.|abzuschließen,zu abschließen,abschließen
Ich spare Geld, {um} ein Auto zu kaufen.|Я коплю деньги, чтобы купить машину.|um,damit,für
Ich gebe dir meine Nummer, {damit} du mich anrufen kannst.|Даю тебе номер, чтобы ты мог мне позвонить.|damit,um,dass
Ich möchte mehr {schlafen}.|Я хочу больше спать.|schlafen,zu schlafen,schlafe
Es ist wichtig, Pausen {zu machen}.|Важно делать перерывы.|zu machen,machen,gemacht
`,
  dialogTitle: 'Новогодние обещания',
  dialog: `
A:Hast du dir für das neue Jahr etwas vorgenommen?|Ты что-нибудь пообещал себе на новый год?
B:Ja! Ich habe vor, endlich den B1-Test zu machen.|Да! Я собираюсь наконец сдать экзамен B1.
A:Super! Und wie willst du das schaffen?|Супер! И как ты собираешься это осуществить?
B:Ich versuche, jeden Tag mit einer App zu üben, um meinen Wortschatz zu verbessern.|Стараюсь каждый день заниматься в приложении, чтобы расширить словарный запас.
A:Gute Idee. Ich spreche ab jetzt nur Deutsch mit dir, damit du mehr Praxis hast!|Хорошая идея. С этого момента говорю с тобой только по-немецки, чтобы у тебя было больше практики!
B:Abgemacht! Danke!|Договорились! Спасибо!
`,
  roleplay: { role: 'коуч по личной эффективности', situation: 'Коучинг-сессия: вы ставите цели на год.', goal: 'Назвать 3 цели и объяснить, как и зачем вы их достигнете (vorhaben zu, um…zu, damit)' },
},
{
  id: 'b1-06', emoji: '🏢', title: 'Ведомства и бюрократия', de: 'Behörden und Ämter',
  goal: 'Справиться в учреждении: родительный падеж и предлоги wegen, trotz, während',
  grammar: {
    title: 'Genitiv и предлоги с ним',
    points: [
      '**Genitiv** — «чей?»: das Auto **des** Mann**es**, die Tasche **der** Frau, das Spielzeug **des** Kind**es**, die Wohnung **der** Eltern.',
      'Артикли: der/das → **des** (+ **-s/-es** у существительного), die/мн. ч. → **der**. Неопределённый: **eines** Freundes, **einer** Freundin.',
      'Предлоги с Genitiv (официальный стиль): **wegen** (из-за), **trotz** (несмотря на), **während** (во время), **innerhalb** (в течение), **statt** (вместо).',
      'В разговоре часто «von + Dativ»: das Auto **von meinem** Bruder.',
    ],
  },
  words: `
die Behörde, -n|ведомство
das Amt, -¨er|учреждение, ведомство
das Formular, -e|бланк, анкета
ausfüllen|заполнять
der Antrag, -¨e|заявление
beantragen|подавать заявление на
die Unterschrift, -en|подпись
der Ausweis, -e|удостоверение личности
die Aufenthaltserlaubnis|вид на жительство
anmelden|регистрировать
die Frist, -en|срок
die Unterlagen|документы
wegen|из-за
trotz|несмотря на
während|во время
`,
  phrases: `
Ich möchte mich anmelden.|Я хочу зарегистрироваться (по месту жительства).
Welche Unterlagen brauche ich?|Какие документы мне нужны?
Füllen Sie bitte dieses Formular aus.|Заполните, пожалуйста, этот бланк.
Hier fehlt noch Ihre Unterschrift.|Здесь ещё не хватает Вашей подписи.
Wegen des Streiks ist das Amt heute geschlossen.|Из-за забастовки учреждение сегодня закрыто.
Trotz des Termins musste ich zwei Stunden warten.|Несмотря на запись, мне пришлось ждать два часа.
Während der Wartezeit habe ich ein Buch gelesen.|Во время ожидания я читал книгу.
Den Antrag müssen Sie innerhalb eines Monats stellen.|Заявление нужно подать в течение месяца.
`,
  gaps: `
Das ist das Auto {des} Nachbarn.|Это машина соседа.|des,dem,der
Wegen {des} Regens bleiben wir zu Hause.|Из-за дождя мы остаёмся дома.|des,dem,der
Trotz {der} Kälte gehen wir spazieren.|Несмотря на холод, мы идём гулять.|der,die,dem
Während {des} Urlaubs habe ich viel gelesen.|Во время отпуска я много читал.|des,dem,den
Die Wohnung {meiner} Eltern ist groß.|Квартира моих родителей большая.|meiner,meinen,meine
Sie müssen das Formular {ausfüllen}.|Вам нужно заполнить бланк.|ausfüllen,auszufüllen,ausgefüllt
`,
  dialogTitle: 'В бюро регистрации',
  dialog: `
A:Guten Tag. Was kann ich für Sie tun?|Добрый день. Чем могу помочь?
B:Guten Tag. Ich bin umgezogen und möchte mich anmelden.|Добрый день. Я переехал и хочу зарегистрироваться.
A:Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?|У Вас с собой паспорт и подтверждение от арендодателя?
B:Den Pass ja, aber die Bestätigung des Vermieters habe ich leider vergessen.|Паспорт да, а подтверждение арендодателя я, к сожалению, забыл.
A:Ohne die Bestätigung kann ich Sie leider nicht anmelden.|Без подтверждения я, к сожалению, не могу Вас зарегистрировать.
B:Wie lange habe ich dafür Zeit?|Сколько у меня на это времени?
A:Innerhalb von zwei Wochen nach dem Einzug. Machen Sie einfach einen neuen Termin.|В течение двух недель после въезда. Просто запишитесь снова.
`,
  roleplay: { role: 'строгий, но вежливый сотрудник Bürgeramt (бюро регистрации)', situation: 'Вы пришли зарегистрироваться по новому адресу, но не всё взяли.', goal: 'Объяснить ситуацию, выяснить, какие документы нужны и какие сроки' },
},
{
  id: 'b1-07', emoji: '📈', title: 'Жизненный путь', de: 'Mein Lebenslauf',
  goal: 'Рассказывать биографию: последовательность событий, Plusquamperfekt, nachdem, bevor',
  grammar: {
    title: 'Plusquamperfekt, nachdem, bevor, seitdem',
    points: [
      '**Plusquamperfekt** — «предпрошедшее»: действие, которое произошло **до** другого в прошлом: hatte/war + Partizip II: Nachdem ich das Abitur **gemacht hatte**, **zog** ich nach Berlin.',
      '**nachdem** (после того как): в придаточном — Plusquamperfekt, в главном — Präteritum/Perfekt.',
      '**bevor** (прежде чем): Bevor ich nach Deutschland kam, **habe** ich in Kasan gearbeitet.',
      '**seitdem** (с тех пор как): Seitdem ich hier wohne, spreche ich jeden Tag Deutsch.',
      '**während** как союз (в то время как): Während ich studierte, arbeitete ich im Café.',
    ],
  },
  words: `
der Lebenslauf, -¨e|резюме, биография
geboren|родился
die Ausbildung, -en|профессиональное обучение
das Studium|учёба в вузе
der Abschluss, -¨e|диплом, окончание учёбы
die Erfahrung, -en|опыт
das Praktikum, Praktika|стажировка
umziehen|переезжать
sich bewerben|подавать заявку на работу
nachdem|после того как
bevor|прежде чем
seitdem|с тех пор как
anschließend|затем, после этого
die Stelle, -n|должность, место
`,
  phrases: `
Ich bin 1995 in Nowosibirsk geboren.|Я родился в 1995 году в Новосибирске.
Nachdem ich die Schule beendet hatte, studierte ich Informatik.|После окончания школы я изучал информатику.
Bevor ich nach Deutschland kam, hatte ich nie Deutsch gelernt.|До приезда в Германию я никогда не учил немецкий.
Anschließend habe ich ein Praktikum bei Siemens gemacht.|Затем я прошёл стажировку в Siemens.
Seitdem ich in München lebe, fahre ich viel Fahrrad.|С тех пор как я живу в Мюнхене, много езжу на велосипеде.
Ich habe drei Jahre Berufserfahrung im Marketing.|У меня три года опыта в маркетинге.
Nachdem wir gegessen hatten, gingen wir spazieren.|После того как мы поели, мы пошли гулять.
Während meines Studiums habe ich in einem Café gejobbt.|Во время учёбы я подрабатывал в кафе.
`,
  gaps: `
Nachdem ich gefrühstückt {hatte}, ging ich zur Arbeit.|Позавтракав, я пошёл на работу.|hatte,habe,hat
Nachdem er angekommen {war}, rief er mich an.|Приехав, он мне позвонил.|war,hatte,ist
{Bevor} du gehst, mach bitte das Licht aus.|Прежде чем уйти, выключи свет.|Bevor,Nachdem,Seitdem
{Seitdem} ich Sport mache, fühle ich mich besser.|С тех пор как занимаюсь спортом, чувствую себя лучше.|Seitdem,Bevor,Während
Ich bin 1990 {geboren}.|Я родился в 1990 году.|geboren,gebären,geborene
Ich habe mich bei einer Firma {beworben}.|Я подал заявку в одну фирму.|beworben,bewerbt,gebewerbt
`,
  dialogTitle: 'Как ты оказался в Германии?',
  dialog: `
A:Wie bist du eigentlich nach Deutschland gekommen?|А как ты вообще оказался в Германии?
B:Nachdem ich mein Studium abgeschlossen hatte, bekam ich ein Stipendium in Heidelberg.|После того как я окончил университет, я получил стипендию в Гейдельберге.
A:Hattest du vorher schon Deutsch gelernt?|Ты до этого уже учил немецкий?
B:Ein bisschen. Bevor ich kam, habe ich einen Intensivkurs gemacht.|Немного. Перед приездом прошёл интенсивный курс.
A:Und was hast du nach dem Stipendium gemacht?|А что ты делал после стипендии?
B:Ich habe mich bei mehreren Firmen beworben. Seitdem arbeite ich als Datenanalyst.|Я подавал заявки в несколько фирм. С тех пор работаю аналитиком данных.
`,
  roleplay: { role: 'журналист, который пишет статью об иммигрантах в Германии', situation: 'Интервью о вашем жизненном пути.', goal: 'Рассказать биографию в хронологическом порядке с nachdem, bevor, seitdem' },
},
{
  id: 'b1-08', emoji: '🤝', title: 'Собеседование', de: 'Das Vorstellungsgespräch',
  goal: 'Пройти собеседование: косвенные вопросы, вежливые формулировки',
  grammar: {
    title: 'Косвенные вопросы',
    points: [
      'Вежливый вопрос часто начинается с **Können Sie mir sagen, …** / **Ich würde gern wissen, …** / **Wissen Sie, …**.',
      'Дальше — придаточное: вопросительное слово + … + **глагол в конце**: Können Sie mir sagen, **wann** die Arbeit **beginnt**?',
      'Если вопрос без вопросительного слова (да/нет) — союз **ob** (ли): Ich möchte wissen, **ob** es Homeoffice **gibt**.',
      'Сравните: Wie viel **verdiene** ich? → Darf ich fragen, wie viel ich **verdiene**?',
    ],
  },
  words: `
das Vorstellungsgespräch, -e|собеседование
die Bewerbung, -en|заявка (на работу)
der Bewerber, -|кандидат
die Stärke, -n|сильная сторона
die Schwäche, -n|слабость
die Teamfähigkeit|умение работать в команде
die Aufgabe, -n|задача
verantwortlich|ответственный
die Probezeit|испытательный срок
das Homeoffice|удалённая работа
die Weiterbildung, -en|повышение квалификации
ob|ли
belastbar|стрессоустойчивый
selbstständig|самостоятельный
`,
  phrases: `
Erzählen Sie etwas über sich.|Расскажите немного о себе.
Warum möchten Sie bei uns arbeiten?|Почему Вы хотите работать у нас?
Meine Stärke ist, dass ich sehr selbstständig arbeite.|Моя сильная сторона в том, что я очень самостоятельно работаю.
Ich war für ein Team von fünf Personen verantwortlich.|Я отвечал за команду из пяти человек.
Können Sie mir sagen, wie lange die Probezeit dauert?|Не могли бы Вы сказать, сколько длится испытательный срок?
Ich würde gern wissen, ob es Weiterbildungsmöglichkeiten gibt.|Я хотел бы узнать, есть ли возможности повышения квалификации.
Wann könnten Sie bei uns anfangen?|Когда Вы могли бы у нас начать?
Wir melden uns nächste Woche bei Ihnen.|Мы свяжемся с Вами на следующей неделе.
`,
  gaps: `
Können Sie mir sagen, wann der Zug {abfährt}?|Не скажете, когда отходит поезд?|abfährt,fährt ab,abfahren
Ich weiß nicht, {ob} er kommt.|Не знаю, придёт ли он.|ob,wenn,dass
Darf ich fragen, wie viel ich {verdiene}?|Можно спросить, сколько я буду получать?|verdiene,verdienen,verdient
Wissen Sie, wo das Büro {ist}?|Вы знаете, где офис?|ist,sein,es
Ich möchte wissen, {wann} ich anfangen kann.|Я хотел бы знать, когда могу начать.|wann,wenn,ob
Mich interessiert, {ob} Homeoffice möglich ist.|Мне интересно, возможна ли удалёнка.|ob,dass,wenn
`,
  dialogTitle: 'Собеседование',
  dialog: `
A:Herzlich willkommen! Erzählen Sie uns bitte kurz etwas über sich.|Добро пожаловать! Расскажите, пожалуйста, коротко о себе.
B:Gern. Ich bin Projektmanagerin und habe fünf Jahre Erfahrung in der IT-Branche.|Охотно. Я менеджер проектов, у меня пять лет опыта в IT.
A:Was sind Ihre Stärken?|Каковы Ваши сильные стороны?
B:Ich bin belastbar und arbeite gern im Team.|Я стрессоустойчива и люблю работать в команде.
A:Haben Sie noch Fragen an uns?|У Вас есть к нам вопросы?
B:Ja. Ich würde gern wissen, ob man auch im Homeoffice arbeiten kann.|Да. Я бы хотела узнать, можно ли работать удалённо.
A:Ja, zwei Tage pro Woche. Wann könnten Sie anfangen?|Да, два дня в неделю. Когда Вы могли бы начать?
B:Ab dem ersten März.|С первого марта.
`,
  roleplay: { role: 'руководитель отдела Herr Dr. Weber на собеседовании', situation: 'Собеседование на должность в вашей сфере в немецкой компании.', goal: 'Рассказать о себе, назвать сильные стороны и задать 2 косвенных вопроса (ob / wie / wann)' },
},
{
  id: 'b1-09', emoji: '🗣️', title: 'Моё мнение', de: 'Meinungen äußern',
  goal: 'Высказывать мнение, соглашаться и спорить, связывать мысли',
  grammar: {
    title: 'Коннекторы: deshalb, trotzdem, obwohl',
    points: [
      '**deshalb / deswegen / darum** (поэтому) — на 1-м месте, глагол сразу после: Es regnet, **deshalb bleibe** ich zu Hause.',
      '**trotzdem** (всё равно) — так же: Es regnet, **trotzdem gehe** ich spazieren.',
      '**obwohl** (хотя) — придаточное, глагол в конце: **Obwohl** es **regnet**, gehe ich spazieren.',
      'Мнение: **Meiner Meinung nach** ist das … / **Ich bin der Meinung, dass** … / **Ich finde (nicht), dass** …',
      'Согласие/несогласие: **Da hast du recht.** / **Das sehe ich anders.** / **Einerseits …, andererseits …**',
    ],
  },
  words: `
die Meinung, -en|мнение
meiner Meinung nach|по моему мнению
der Vorteil, -e|преимущество
der Nachteil, -e|недостаток
das Argument, -e|аргумент
zustimmen|соглашаться
widersprechen|возражать
überzeugen|убеждать
deshalb|поэтому
trotzdem|тем не менее
obwohl|хотя
einerseits … andererseits|с одной стороны … с другой стороны
die Social Media|соцсети
abhängig|зависимый
`,
  phrases: `
Meiner Meinung nach sind soziale Medien gefährlich.|По моему мнению, соцсети опасны.
Ich bin der Meinung, dass Kinder kein Handy brauchen.|Я считаю, что детям не нужен телефон.
Da hast du völlig recht.|Тут ты совершенно прав.
Das sehe ich ganz anders.|Я смотрю на это совсем иначе.
Einerseits ist das praktisch, andererseits kostet es viel Zeit.|С одной стороны, это практично, с другой — отнимает много времени.
Obwohl ich wenig Zeit habe, lese ich jeden Abend.|Хотя у меня мало времени, я читаю каждый вечер.
Ich war müde, trotzdem bin ich zur Party gegangen.|Я устал, но всё равно пошёл на вечеринку.
Das Handy ist praktisch, deshalb benutzen es alle.|Телефон удобен, поэтому им все пользуются.
`,
  gaps: `
Ich bin krank, {deshalb} bleibe ich im Bett.|Я болен, поэтому остаюсь в постели.|deshalb,obwohl,trotzdem
{Obwohl} es kalt ist, trägt er keine Jacke.|Хотя холодно, он без куртки.|Obwohl,Trotzdem,Deshalb
Das Wetter war schlecht, trotzdem {sind} wir gewandert.|Погода была плохая, но мы всё равно пошли в поход.|sind,wir sind,haben
Meiner Meinung {nach} ist das falsch.|По-моему, это неправильно.|nach,von,zu
Es ist teuer, deshalb {kaufe} ich es nicht.|Это дорого, поэтому я это не покупаю.|kaufe,ich kaufe,kaufen
Ich finde, {dass} du recht hast.|Я считаю, что ты прав.|dass,das,ob
`,
  dialogTitle: 'Телефоны в школе',
  dialog: `
A:Ich finde, Handys sollten in der Schule verboten sein.|Я считаю, что телефоны в школе нужно запретить.
B:Das sehe ich anders. Handys können beim Lernen helfen.|Я так не считаю. Телефоны могут помогать в учёбе.
A:Einerseits ja, andererseits lenken sie die Schüler ab.|С одной стороны, да, с другой — они отвлекают учеников.
B:Da hast du recht. Trotzdem glaube ich, dass ein Verbot nicht die Lösung ist.|Тут ты прав. Тем не менее я думаю, что запрет — не решение.
A:Und was schlägst du vor?|И что ты предлагаешь?
B:Klare Regeln: Im Unterricht bleibt das Handy in der Tasche, in der Pause darf man es benutzen.|Чёткие правила: на уроке телефон в сумке, на перемене можно пользоваться.
`,
  roleplay: { role: 'собеседник в ток-шоу с противоположным мнением', situation: 'Ток-шоу на тему «Нужен ли 4-дневный рабочий день?»', goal: 'Высказать мнение, привести аргументы с deshalb/obwohl/trotzdem, вежливо возразить' },
},
{
  id: 'b1-10', emoji: '🔮', title: 'Будущее', de: 'Die Zukunft',
  goal: 'Говорить о будущем, прогнозах и предположениях: Futur I',
  grammar: {
    title: 'Futur I: werden + инфинитив',
    points: [
      'Для планов немцы часто используют **Präsens + указание времени**: Morgen **fahre** ich nach Köln.',
      '**Futur I** = werden + инфинитив в конце — для **прогнозов, обещаний, решений**: In 20 Jahren **werden** Autos selbst **fahren**. Ich **werde** dich anrufen!',
      'Futur I + **wohl / wahrscheinlich** = предположение о настоящем: Er **wird wohl** krank **sein**. (Наверное, он болен.)',
      'Слова-помощники: **vermutlich, wahrscheinlich, sicher, bestimmt, vielleicht**.',
    ],
  },
  words: `
die Zukunft|будущее
die Vergangenheit|прошлое
die Gegenwart|настоящее
werden|становиться; (вспом.) будет
die Prognose, -n|прогноз
die Technik|техника
der Roboter, -|робот
die künstliche Intelligenz|искусственный интеллект
sich verändern|меняться
ersetzen|заменять
wahrscheinlich|вероятно
bestimmt|наверняка
vermutlich|предположительно
in Zukunft|в будущем
`,
  phrases: `
In zwanzig Jahren werden viele Autos selbst fahren.|Через двадцать лет многие машины будут ездить сами.
Ich werde nächstes Jahr meinen Master machen.|В следующем году я буду получать магистра.
Roboter werden viele Jobs ersetzen.|Роботы заменят много рабочих мест.
Er ist nicht da. Er wird wohl im Stau stehen.|Его нет. Наверное, стоит в пробке.
Ich verspreche dir, ich werde pünktlich sein.|Обещаю тебе, я буду вовремя.
Die Welt wird sich stark verändern.|Мир сильно изменится.
Wahrscheinlich werden wir alle länger arbeiten.|Вероятно, мы все будем работать дольше.
Wie wird die Stadt der Zukunft aussehen?|Как будет выглядеть город будущего?
`,
  gaps: `
Ich {werde} dich morgen anrufen.|Я позвоню тебе завтра.|werde,würde,wurde
Wir werden im Sommer nach Kanada {fliegen}.|Летом мы полетим в Канаду.|fliegen,geflogen,fliegt
Es {wird} morgen regnen.|Завтра будет дождь.|wird,werdet,wurde
{Wirst} du zur Party kommen?|Ты придёшь на вечеринку?|Wirst,Wird,Werdest
Sie wird wohl müde {sein}.|Она, наверное, устала.|sein,ist,gewesen
Die Preise werden weiter {steigen}.|Цены будут расти дальше.|steigen,gestiegen,steigt
`,
  dialogTitle: 'Мир в 2050 году',
  dialog: `
A:Was glaubst du, wie wird die Welt 2050 aussehen?|Как думаешь, каким будет мир в 2050 году?
B:Ich glaube, wir werden kaum noch selbst Auto fahren.|Думаю, мы почти не будем сами водить машины.
A:Und die Arbeit? Werden Roboter unsere Jobs übernehmen?|А работа? Роботы займут наши места?
B:Manche Jobs bestimmt. Aber es wird auch neue Berufe geben.|Некоторые — наверняка. Но появятся и новые профессии.
A:Ich hoffe, wir werden mehr Freizeit haben!|Надеюсь, у нас будет больше свободного времени!
B:Das wäre schön. Aber wahrscheinlich werden wir einfach mehr am Handy sein.|Было бы хорошо. Но, вероятно, мы просто будем больше сидеть в телефоне.
`,
  roleplay: { role: 'футуролог на научно-популярной лекции, который отвечает на вопросы публики', situation: 'После лекции о будущем вы задаёте вопросы и спорите о прогнозах.', goal: 'Сделать 3 прогноза с Futur I и одно предположение с «wird wohl»' },
},
];
