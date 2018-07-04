var editor=document.getElementById("screen");

var screenContext=editor.getContext("2d");

//position of each character on the font sheet
var lookup={0:[0,0],9:[9,0],10:[13,0],13:[13,0],32:[32,0],33:[33,0],34:[34,0],35:[35,0],36:[36,0],37:[37,0],38:[38,0],39:[39,0],40:[40,0],41:[41,0],42:[42,0],43:[43,0],44:[44,0],45:[45,0],46:[46,0],47:[47,0],48:[48,0],49:[49,0],50:[50,0],51:[51,0],52:[52,0],53:[53,0],54:[54,0],55:[55,0],56:[56,0],57:[57,0],58:[58,0],59:[59,0],60:[60,0],61:[61,0],62:[62,0],63:[63,0],64:[0,1],65:[1,1],66:[2,1],67:[3,1],68:[4,1],69:[5,1],70:[6,1],71:[7,1],72:[8,1],73:[9,1],74:[10,1],75:[11,1],76:[12,1],77:[13,1],78:[14,1],79:[15,1],80:[16,1],81:[17,1],82:[18,1],83:[19,1],84:[20,1],85:[21,1],86:[22,1],87:[23,1],88:[24,1],89:[25,1],90:[26,1],91:[27,1],92:[28,1],93:[29,1],94:[30,1],95:[31,1],96:[32,1],97:[33,1],98:[34,1],99:[35,1],100:[36,1],101:[37,1],102:[38,1],103:[39,1],104:[40,1],105:[41,1],106:[42,1],107:[43,1],108:[44,1],109:[45,1],110:[46,1],111:[47,1],112:[48,1],113:[49,1],114:[50,1],115:[51,1],116:[52,1],117:[53,1],118:[54,1],119:[55,1],120:[56,1],121:[57,1],122:[58,1],123:[59,1],124:[60,1],125:[61,1],126:[62,1],127:[63,1],160:[32,0],161:[58,5],162:[17,6],163:[19,6],164:[57,5],165:[28,1],166:[16,6],167:[13,6],168:[41,6],169:[28,6],170:[36,4],171:[49,8],172:[63,5],173:[61,8],174:[29,6],175:[48,4],176:[31,3],177:[2,6],178:[61,5],179:[62,5],180:[44,6],181:[56,6],182:[14,6],183:[24,10],184:[60,8],185:[60,5],186:[59,5],187:[50,8],188:[57,6],189:[58,6],190:[59,6],191:[60,6],192:[0,9],193:[1,9],194:[2,9],195:[3,9],196:[4,9],197:[5,9],198:[6,9],199:[7,9],200:[8,9],201:[9,9],202:[10,9],203:[11,9],204:[12,9],205:[13,9],206:[14,9],207:[15,9],208:[16,9],209:[17,9],210:[18,9],211:[19,9],212:[20,9],213:[21,9],214:[22,9],215:[0,6],216:[23,9],217:[25,9],218:[26,9],219:[27,9],220:[28,9],221:[29,9],222:[31,9],223:[63,9],224:[32,9],225:[33,9],226:[34,9],227:[35,9],228:[36,9],229:[37,9],230:[38,9],231:[39,9],232:[40,9],233:[41,9],234:[42,9],235:[43,9],236:[44,9],237:[45,9],238:[46,9],239:[47,9],240:[48,9],241:[49,9],242:[50,9],243:[51,9],244:[52,9],245:[53,9],246:[54,9],247:[1,6],248:[55,9],249:[57,9],250:[58,9],251:[59,9],252:[60,9],253:[61,9],254:[63,8],255:[62,9],256:[2,7],257:[2,8],258:[3,7],259:[3,8],260:[4,7],261:[4,8],262:[5,7],263:[5,8],264:[46,7],265:[46,8],266:[6,7],267:[6,8],268:[7,7],269:[7,8],270:[8,7],271:[8,8],272:[16,9],273:[48,9],274:[9,7],275:[9,8],276:[10,7],277:[10,8],278:[11,7],279:[11,8],280:[12,7],281:[12,8],282:[10,7],283:[10,8],284:[47,7],285:[47,8],286:[13,7],287:[13,8],288:[14,7],289:[14,8],290:[15,7],291:[15,8],292:[50,12],293:[50,13],294:[16,7],295:[16,8],296:[51,12],297:[51,13],298:[17,7],299:[17,8],300:[52,12],301:[52,13],302:[18,7],303:[18,8],304:[19,7],305:[20,8],306:[21,7],307:[21,8],308:[53,12],309:[53,13],310:[22,7],311:[22,8],312:[49,7],313:[23,7],314:[23,8],315:[24,7],316:[24,8],317:[25,7],318:[25,8],319:[54,12],320:[54,13],321:[26,7],322:[26,8],323:[27,7],324:[27,8],325:[28,7],326:[28,8],327:[29,7],328:[29,8],329:[42,8],330:[55,12],331:[55,13],332:[56,12],333:[56,13],334:[57,12],335:[57,13],336:[30,7],337:[30,8],338:[24,9],339:[56,9],340:[31,7],341:[31,8],342:[58,12],343:[58,13],344:[32,7],345:[32,8],346:[33,7],347:[33,8],348:[59,12],349:[59,13],350:[34,7],351:[34,8],352:[0,7],353:[0,8],354:[45,7],355:[45,8],356:[35,7],357:[35,8],358:[60,12],359:[60,13],360:[61,12],361:[61,13],362:[36,7],363:[36,8],364:[62,12],365:[62,13],366:[37,7],367:[37,8],368:[38,7],369:[38,8],370:[39,7],371:[39,8],372:[63,12],373:[63,13],374:[32,4],375:[33,4],376:[30,9],377:[40,7],378:[40,8],379:[41,7],380:[41,8],381:[1,7],382:[1,8],383:[47,6],402:[42,7],453:[43,7],454:[43,8],496:[31,13],498:[44,7],499:[44,8],538:[45,7],539:[45,8],711:[25,10],728:[26,10],729:[27,10],730:[0,12],731:[28,10],732:[29,10],894:[63,7],900:[42,6],901:[46,6],902:[51,7],903:[24,10],904:[52,7],905:[53,7],906:[54,7],908:[55,7],910:[56,7],911:[57,7],912:[60,7],913:[0,10],914:[1,10],915:[2,10],916:[3,10],917:[4,10],918:[5,10],919:[6,10],920:[7,10],921:[8,10],922:[9,10],923:[10,10],924:[11,10],925:[12,10],926:[13,10],927:[14,10],928:[15,10],929:[16,10],931:[17,10],932:[18,10],933:[19,10],934:[20,10],935:[21,10],936:[22,10],937:[23,10],938:[58,7],939:[59,7],940:[51,8],941:[52,8],942:[53,8],943:[54,8],944:[61,7],945:[32,10],946:[33,10],947:[34,10],948:[35,10],949:[36,10],950:[37,10],951:[38,10],952:[39,10],953:[40,10],954:[41,10],955:[42,10],956:[43,10],957:[44,10],958:[45,10],959:[46,10],960:[47,10],961:[48,10],962:[62,7],963:[49,10],964:[50,10],965:[51,10],966:[52,10],967:[53,10],968:[54,10],969:[55,10],970:[58,8],971:[59,8],972:[55,8],973:[56,8],974:[57,8],1025:[6,11],1040:[0,11],1041:[1,11],1042:[2,11],1043:[3,11],1044:[4,11],1045:[5,11],1046:[7,11],1047:[8,11],1048:[9,11],1049:[10,11],1050:[11,11],1051:[12,11],1052:[13,11],1053:[14,11],1054:[15,11],1055:[16,11],1056:[17,11],1057:[18,11],1058:[19,11],1059:[20,11],1060:[21,11],1061:[22,11],1062:[23,11],1063:[24,11],1064:[25,11],1065:[26,11],1066:[27,11],1067:[28,11],1068:[29,11],1069:[30,11],1070:[31,11],1071:[48,7],1072:[32,11],1073:[33,11],1074:[34,11],1075:[35,11],1076:[36,11],1077:[37,11],1078:[39,11],1079:[40,11],1080:[41,11],1081:[42,11],1082:[43,11],1083:[44,11],1084:[45,11],1085:[46,11],1086:[47,11],1087:[48,11],1088:[49,11],1089:[50,11],1090:[51,11],1091:[52,11],1092:[53,11],1093:[54,11],1094:[55,11],1095:[56,11],1096:[57,11],1097:[58,11],1098:[59,11],1099:[60,11],1100:[61,11],1101:[62,11],1102:[63,11],1103:[48,8],1105:[38,11],8211:[61,8],8212:[45,0],8216:[44,6],8217:[58,10],8218:[59,10],8219:[60,10],8220:[30,6],8221:[31,6],8222:[57,10],8224:[11,6],8225:[12,6],8230:[37,4],8240:[20,6],8242:[42,6],8243:[45,6],8249:[62,6],8250:[63,6],8251:[26,6],8361:[56,10],8364:[18,6],8470:[31,4],8482:[61,6],8592:[29,0],8593:[30,0],8594:[28,0],8595:[31,0],8658:[21,6],8660:[22,6],8704:[3,6],8706:[4,6],8730:[30,4],8734:[7,6],8756:[8,6],8757:[9,6],8834:[5,6],8835:[6,6],8978:[10,6],9472:[21,2],9473:[30,12],9474:[22,2],9475:[31,12],9484:[24,2],9487:[32,12],9488:[25,2],9491:[33,12],9492:[26,2],9495:[34,12],9496:[27,2],9499:[35,12],9500:[18,2],9501:[47,12],9504:[44,12],9507:[27,12],9508:[20,2],9509:[49,12],9512:[46,12],9515:[29,12],9516:[17,2],9519:[41,12],9520:[43,12],9523:[26,12],9524:[16,2],9527:[40,12],9528:[42,12],9531:[25,12],9532:[19,2],9535:[48,12],9538:[45,12],9547:[28,12],9588:[23,12],9589:[24,12],9590:[21,12],9591:[22,12],9592:[38,12],9593:[39,12],9594:[36,12],9595:[37,12],9632:[32,3],9633:[36,3],9650:[34,3],9651:[38,3],9660:[35,3],9661:[39,3],9670:[50,3],9671:[0,2],9675:[37,3],9678:[26,0],9679:[33,3],9733:[10,0],9734:[50,6],9792:[24,6],9794:[25,6],9824:[48,3],9825:[61,10],9826:[0,2],9827:[51,3],9828:[27,12.75],9829:[49,3],9830:[50,3],9831:[62,10],9834:[16,0],9837:[27,6],12288:[32,0],12289:[36,2],12290:[33,2],12291:[36,6],12293:[34,6],12294:[39,6],12296:[51,6],12297:[52,6],12298:[53,6],12299:[54,6],12300:[34,2],12301:[35,2],12302:[34,4],12303:[35,4],12304:[48,6],12305:[49,6],12306:[23,6],12316:[32,2],12317:[33,6],12319:[32,6],12353:[39,4],12354:[49,4],12355:[40,4],12356:[50,4],12357:[41,4],12358:[51,4],12359:[42,4],12360:[52,4],12361:[43,4],12362:[53,4],12363:[54,4],12364:[32,5],12365:[55,4],12366:[33,5],12367:[56,4],12368:[34,5],12369:[57,4],12370:[35,5],12371:[58,4],12372:[36,5],12373:[59,4],12374:[37,5],12375:[60,4],12376:[38,5],12377:[61,4],12378:[39,5],12379:[62,4],12380:[40,5],12381:[63,4],12382:[41,5],12383:[0,5],12384:[42,5],12385:[1,5],12386:[43,5],12387:[47,4],12388:[2,5],12389:[44,5],12390:[3,5],12391:[45,5],12392:[4,5],12393:[46,5],12394:[5,5],12395:[6,5],12396:[7,5],12397:[8,5],12398:[9,5],12399:[10,5],12400:[47,5],12401:[52,5],12402:[11,5],12403:[48,5],12404:[53,5],12405:[12,5],12406:[49,5],12407:[54,5],12408:[13,5],12409:[50,5],12410:[55,5],12411:[14,5],12412:[51,5],12413:[56,5],12414:[15,5],12415:[16,5],12416:[17,5],12417:[18,5],12418:[19,5],12419:[44,4],12420:[20,5],12421:[45,4],12422:[21,5],12423:[46,4],12424:[22,5],12425:[23,5],12426:[24,5],12427:[25,5],12428:[26,5],12429:[27,5],12430:[29,4],12431:[28,5],12434:[38,4],12435:[29,5],12443:[30,5],12444:[31,5],12445:[37,6],12446:[38,6],12449:[39,2],12450:[49,2],12451:[40,2],12452:[50,2],12453:[41,2],12454:[51,2],12455:[42,2],12456:[52,2],12457:[43,2],12458:[53,2],12459:[54,2],12460:[0,4],12461:[55,2],12462:[1,4],12463:[56,2],12464:[2,4],12465:[57,2],12466:[3,4],12467:[58,2],12468:[4,4],12469:[59,2],12470:[5,4],12471:[60,2],12472:[6,4],12473:[61,2],12474:[7,4],12475:[62,2],12476:[8,4],12477:[63,2],12478:[9,4],12479:[0,3],12480:[10,4],12481:[1,3],12482:[11,4],12483:[47,2],12484:[2,3],12485:[12,4],12486:[3,3],12487:[13,4],12488:[4,3],12489:[14,4],12490:[5,3],12491:[6,3],12492:[7,3],12493:[8,3],12494:[9,3],12495:[10,3],12496:[15,4],12497:[20,4],12498:[11,3],12499:[16,4],12500:[21,4],12501:[12,3],12502:[17,4],12503:[22,4],12504:[13,3],12505:[18,4],12506:[23,4],12507:[14,3],12508:[19,4],12509:[24,4],12510:[15,3],12511:[16,3],12512:[17,3],12513:[18,3],12514:[19,3],12515:[44,2],12516:[20,3],12517:[45,2],12518:[21,3],12519:[46,2],12520:[22,3],12521:[23,3],12522:[24,3],12523:[25,3],12524:[26,3],12525:[27,3],12526:[28,4],12527:[28,3],12530:[38,2],12531:[29,3],12532:[25,4],12533:[26,4],12534:[27,4],12539:[37,2],12540:[48,2],20189:[35,6],57600:[0,14],57601:[1,14],57602:[2,14],57603:[3,14],57604:[4,14],57605:[5,14],57606:[6,14],57607:[7,14],57608:[8,14],57609:[9,14],57610:[10,14],57611:[11,14],57612:[12,14],57613:[13,14],57614:[14,14],57615:[15,14],57616:[16,14],57617:[17,14],57618:[18,14],57619:[19,14],57620:[20,14],57621:[21,14],57622:[22,14],57623:[23,14],57624:[24,14],57625:[25,14],57626:[26,14],57627:[27,14],57628:[28,14],57629:[29,14],57630:[30,14],57631:[31,14],57632:[32,14],57633:[33,14],57634:[34,14],57635:[35,14],57636:[36,14],57637:[37,14],57638:[38,14],57639:[39,14],57640:[40,14],57641:[41,14],57642:[42,14],57643:[43,14],57644:[44,14],57645:[45,14],57646:[46,14],57647:[47,14],57648:[48,14],57649:[49,14],57650:[50,14],57651:[51,14],57652:[52,14],57653:[53,14],57654:[54,14],57655:[55,14],57656:[56,14],57657:[57,14],57658:[58,14],57659:[59,14],57660:[60,14],57661:[61,14],57662:[62,14],57663:[63,14],57664:[0,15],57665:[1,15],57666:[2,15],57667:[3,15],57668:[4,15],57669:[5,15],57670:[6,15],57671:[7,15],57672:[8,15],57673:[9,15],57674:[10,15],57675:[11,15],57676:[12,15],57677:[13,15],57678:[14,15],57679:[15,15],57680:[16,15],57681:[17,15],57682:[18,15],57683:[19,15],57684:[20,15],57685:[21,15],57686:[22,15],57687:[23,15],57688:[24,15],57689:[25,15],57690:[26,15],57691:[27,15],57692:[28,15],57693:[29,15],57694:[30,15],57695:[31,15],57696:[32,15],57697:[33,15],57698:[34,15],57699:[35,15],57700:[36,15],57701:[37,15],57702:[38,15],57703:[39,15],57704:[40,15],57705:[41,15],57706:[42,15],57707:[43,15],57708:[44,15],57709:[45,15],57710:[46,15],57711:[47,15],57712:[48,15],57713:[49,15],57714:[50,15],57715:[51,15],57716:[52,15],57717:[53,15],57718:[54,15],57719:[55,15],57720:[56,15],57721:[57,15],57722:[58,15],57723:[59,15],57724:[60,15],57725:[61,15],57726:[62,15],57727:[63,15],57856:[32,0],57857:[1,0],57858:[2,0],57859:[3,0],57860:[4,0],57861:[5,0],57862:[6,0],57863:[7,0],57864:[8,0],57865:[9,0],57866:[10,0],57867:[11,0],57868:[12,0],57869:[13,0],57870:[14,0],57871:[15,0],57872:[16,0],57873:[17,0],57874:[18,0],57875:[19,0],57876:[20,0],57877:[21,0],57878:[22,0],57879:[23,0],57880:[24,0],57881:[25,0],57882:[26,0],57883:[27,0],57884:[28,0],57885:[29,0],57886:[30,0],57887:[31,0],57888:[0,12],57889:[1,12],57890:[2,12],57891:[3,12],57892:[4,12],57893:[5,12],57894:[6,12],57895:[7,12],57896:[8,12],57897:[9,12],57898:[10,12],57899:[11,12],57900:[12,12],57901:[13,12],57902:[14,12],57903:[15,12],57904:[16,12],57905:[17,12],57906:[18,12],57907:[19,12],57908:[20,12],57909:[55,6],57910:[50,7],57911:[62,8],57912:[31,10],57913:[27,13],57914:[21,13],57915:[22,13],57916:[23,13],57917:[24,13],57918:[25,13],57919:[26,13],57920:[0,13],57921:[1,13],57922:[2,13],57923:[3,13],57924:[4,13],57925:[5,13],57926:[6,13],57927:[7,13],57928:[8,13],57929:[9,13],57930:[10,13],57931:[11,13],57932:[12,13],57933:[13,13],57934:[14,13],57935:[15,13],57936:[16,13],57937:[17,13],57938:[18,13],57939:[19,13],57940:[20,13],57941:[21,13],57942:[22,13],57943:[23,13],57944:[24,13],57945:[25,13],57946:[26,13],57952:[21,12],57953:[22,12],57954:[23,12],57955:[24,12],57956:[25,12],57957:[26,12],57958:[27,12],57959:[28,12],57960:[29,12],57961:[30,12],57962:[31,12],57963:[32,12],57964:[33,12],57965:[34,12],57966:[35,12],57967:[36,12],57968:[37,12],57969:[38,12],57970:[39,12],57971:[40,12],57972:[41,12],57973:[42,12],57974:[43,12],57975:[44,12],57976:[45,12],57977:[46,12],57978:[47,12],57979:[48,12],57980:[49,12],57981:[1,12],57982:[10,12],57983:[11,12],57984:[0,2],57985:[1,2],57986:[2,2],57987:[3,2],57988:[4,2],57989:[5,2],57990:[6,2],57991:[7,2],57992:[8,2],57993:[9,2],57994:[10,2],57995:[11,2],57996:[12,2],57997:[13,2],57998:[14,2],57999:[15,2],58000:[16,2],58001:[17,2],58002:[18,2],58003:[19,2],58004:[20,2],58005:[21,2],58006:[22,2],58007:[23,2],58008:[24,2],58009:[25,2],58010:[26,2],58011:[27,2],58012:[28,2],58013:[29,2],58014:[30,2],58015:[31,2],58016:[32,13],58017:[33,13],58018:[34,13],58019:[35,13],58020:[36,13],58021:[37,13],58022:[38,13],58023:[39,13],58024:[40,13],58025:[41,13],58026:[42,13],58027:[43,13],58028:[44,13],58029:[45,13],58030:[46,13],58031:[47,13],58032:[48,13],58033:[49,13],58034:[0,13],58035:[1,13],58036:[2,13],58037:[3,13],58038:[4,13],58039:[5,13],58040:[6,13],58041:[7,13],58042:[8,13],58043:[9,13],58044:[2,12],58045:[3,12],58046:[4,12],58047:[20,13],58048:[10,13],58049:[11,13],58050:[12,13],58051:[13,13],58052:[14,13],58053:[15,13],58054:[16,13],58055:[17,13],58056:[18,13],58057:[19,13],58080:[32,3],58081:[33,3],58082:[34,3],58083:[35,3],58084:[36,3],58085:[37,3],58086:[38,3],58087:[39,3],58088:[40,3],58089:[41,3],58090:[42,3],58091:[43,3],58092:[44,3],58093:[45,3],58094:[46,3],58095:[47,3],58096:[48,3],58097:[49,3],58098:[50,3],58099:[51,3],58100:[52,3],58101:[53,3],58102:[54,3],58103:[55,3],58104:[56,3],58105:[57,3],58106:[58,3],58107:[59,3],58108:[60,3],58109:[61,3],58110:[62,3],58111:[63,3],65280:[32,0],65281:[33,0],65282:[34,0],65283:[35,0],65284:[36,0],65285:[37,0],65286:[38,0],65287:[39,0],65288:[40,0],65289:[41,0],65290:[42,0],65291:[43,0],65292:[44,0],65293:[45,0],65294:[46,0],65295:[47,0],65296:[48,0],65297:[49,0],65298:[50,0],65299:[51,0],65300:[52,0],65301:[53,0],65302:[54,0],65303:[55,0],65304:[56,0],65305:[57,0],65306:[58,0],65307:[59,0],65308:[60,0],65309:[61,0],65310:[62,0],65311:[63,0],65312:[0,1],65313:[1,1],65314:[2,1],65315:[3,1],65316:[4,1],65317:[5,1],65318:[6,1],65319:[7,1],65320:[8,1],65321:[9,1],65322:[10,1],65323:[11,1],65324:[12,1],65325:[13,1],65326:[14,1],65327:[15,1],65328:[16,1],65329:[17,1],65330:[18,1],65331:[19,1],65332:[20,1],65333:[21,1],65334:[22,1],65335:[23,1],65336:[24,1],65337:[25,1],65338:[26,1],65339:[27,1],65340:[28,1],65341:[29,1],65342:[30,1],65343:[31,1],65344:[32,1],65345:[33,1],65346:[34,1],65347:[35,1],65348:[36,1],65349:[37,1],65350:[38,1],65351:[39,1],65352:[40,1],65353:[41,1],65354:[42,1],65355:[43,1],65356:[44,1],65357:[45,1],65358:[46,1],65359:[47,1],65360:[48,1],65361:[49,1],65362:[50,1],65363:[51,1],65364:[52,1],65365:[53,1],65366:[54,1],65367:[55,1],65368:[56,1],65369:[57,1],65370:[58,1],65371:[59,1],65372:[15,6],65373:[61,1],65374:[32,2]};

var x,y,line,width,height,fullWidth,fullHeight,charSize=8,bw=4;

function switchSize(qsp){
	fullWidth=50
	fullHeight=30
	if(qsp){
		fullWidth/=2;
		fullHeight/=2;
	}
	width=fullWidth-4
	height=fullHeight-1
	
	editor.width=fullWidth*charSize
	editor.height=fullHeight*charSize
}

switchSize(false);

var colors={
	"text"     : "rgb(255,255,255)",
	"keyword"  : "rgb(107,189,245)",
	"number"   : "rgb(246,123,213)",
	"string"   : "rgb(160,160, 160)",
	"comment"  : "rgb( 16,182, 48)",
	"label"    : "rgb(247,166,  0)",
	"function" : "rgb(122,124,247)"
}

function putpart(code,type){
	if(type && type.length>10)
		type="keyword";
	var color=colors[type]||colors["text"];
	for(var i=0;i<code.length;i++){
		if(x>=width){
			x=0;
			y++;
			passline();
		}
		putchar(x+bw,y,code.charCodeAt(i),color)
		x++
		if(code.charAt(i)=="\n"){
			x=0;
			y++;
			line++;
			startline(line);
		}
	}
}

function startline(line){
	var started=false,n,symbol;
	for(var i=0;i<3;i++){
		n=Math.floor(line/(100**(2-i)));
		if(n==0&&!started)
			symbol=0xE16E;
		else if(n<10&&started)
			symbol=0xE164+n;
		else
			symbol=0xE100+n;
		if(n)
			started=true;
		putchar(i,y,symbol,"#C6C6C6");
	}
	putchar(3,y,0xE16F,"#C6C6C6");
}

function passline(){
	for(var i=0;i<3;i++)
		putchar(i,y,0xE17E,"#C6C6C6");
	putchar(3,y,0xE17F,"#C6C6C6");
}

function putcode(code){
	x=0;
	y=0;
	line=1;
	screenContext.fillStyle="black";
	screenContext.fillRect(0,0,fullWidth*charSize,fullHeight*charSize);
	startline(line);
	highlight(code,putpart);
	
	if(x>=width){
		x=0;
		y++;
		passline();
	}
	for(;y<height;y++)
		passline();
	for(var i=0;i<bw;i++)
		putchar(i,height,0xE17A,"#C6C6C6");
	var char;
	for(var i=0;i<width;i+=2){
		if(i<10)
			char=0xE170+i;
		else
			char=0xE100+i;
		putchar(i+bw,height,char,"#C6C6C6");
		if(i<width-1)
			putchar(i+1+bw,height,0xE17A,"#C6C6C6");
	}
}

function putchar(x,y,char,color){
	put(x,y,lookup[char]||[63,10],color);
}

function put(x,y,pos,color){
	//draw symbol
	screenContext.drawImage(fontimage,pos[0]*8,pos[1]*8,8,8,x*charSize,y*charSize,charSize,charSize);
	//set color
	screenContext.fillStyle=color;
	//draw color in multiply mode
	screenContext.globalCompositeOperation="multiply";
	screenContext.fillRect(x*charSize,y*charSize,charSize,charSize);
	screenContext.globalCompositeOperation="source-over";
}
