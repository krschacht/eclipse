import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('connect()')

    this.cities = new Array(
      "- - - CANADA - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Alert, NU",  82,  31,   0,  62,  20,   0,  29.0,  -4.0,
      "Calgary, AB",  51,   3,   0, 114,   5,   0,1079.0,  -7.0,
      "Charlottetown, PE",  46,  14,   0,  63,   8,   0,  55.2,  -4.0,
      "Churchill, MB",  58,  46,   0,  94,  10,   0,  28.7,  -6.0,
      "Edmonton, AB",  53,  33,   0, 113,  28,   0, 676.4,  -7.0,
      "Fredericton, NB",  45,  58,   0,  66,  39,   0,   8.8,  -4.0,
      "Halifax, NS",  44,  39,   0,  63,  36,   0,  25.3,  -4.0,
      "Hamilton, ON",  43,  15,   0,  79,  51,   0, 100.3,  -5.0,
      "Inuvik, NT",  68,  22,   0, 133,  44,   0,   0.0,  -7.0,
      "Iqaluit, NU",  63,  44,   0,  68,  28,   0,  33.5,  -5.0,
      "Kuujjuaq, QC",  58,   6,   0,  68,  25,   0,   0.0,  -5.0,
      "Lethbridge, AB",  49,  42,   0, 112,  50,   0, 909.8,  -7.0,
      "London, ON",  42,  59,   0,  81,  14,   0, 250.5,  -5.0,
      "Montreal, QC",  45,  31,   0,  73,  34,   0,  57.0,  -5.0,
      "Ottawa, ON",  45,  25,   0,  75,  42,   0, 114.0,  -5.0,
      "Prince George, BC",  53,  55,   0, 122,  45,   0, 676.0,  -8.0,
      "Quebec, QC",  46,  49,   0,  71,  14,   0,  72.8,  -5.0,
      "Regina, SK",  50,  25,   0, 104,  39,   0, 574.2,  -6.0,
      "Resolute, NU",  74,  41,   0,  94,  54,   0,  67.1,  -6.0,
      "Saint John's, NF",  47,  34,   0,  52,  43,   0,  64.3,  -3.5,
      "Saskatoon, SK",  52,   7,   0, 106,  38,   0, 515.1,  -6.0,
      "Sault Sainte Marie, ON",  46,  31,   0,  84,  20,   0, 179.5,  -5.0,
      "Thunder Bay, ON",  48,  23,   0,  89,  15,   0, 187.8,  -5.0,
      "Toronto, ON",  43,  39,   0,  79,  23,   0, 115.5,  -5.0,
      "Vancouver, BC",  49,  16,   0, 123,   7,   0,  38.7,  -8.0,
      "Victoria, BC",  48,  25,   0, 123,  22,   0,  17.4,  -5.0,
      "Whitehorse, YT",  60,  43,   0, 135,   3,   0, 702.0,  -8.0,
      "Winnipeg, MB",  49,  53,   0,  97,   9,   0, 238.7,  -6.0,
      "Windsor, ON",  42,  18,   0,  83,   1,   0, 183.8,  -5.0,
      "Yellowknife, NT",  62,  27,   0, 114,  21,   0, 205.4,  -7.0,
      "- - - UNITED STATES OF AMERICA - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Albany, NY",  42,  39,   0,  73,  45,   0,  83.8,  -5.0,
      "Atlanta, GA",  33,  44,   0,  84,  23,   0, 307.8,  -5.0,
      "Austin, TX",  30,  16,   0,  97,  44,   0, 182.0,  -6.0,
      "Baltimore, MD",  39,  17,   0,  76,  36,   0,  45.1,  -5.0,
      "Baton Rouge, LA",  30,  27,   0,  91,   9,   0,  17.4,  -6.0,
      "Boston, MA",  42,  21,   0,  71,   3,   0,   4.6,  -5.0,
      "Buffalo, NY",  42,  53,   0,  78,  52,   0, 214.9,  -5.0,
      "Chicago, IL",  41,  51,   0,  87,  39,   0, 185.0,  -6.0,
      "Cincinnati, OH",  39,   9,   0,  84,  27,   0, 264.9,  -5.0,
      "Cleveland, OH",  41,  29,   0,  81,  41,   0, 236.8,  -5.0,
      "Columbus, OH",  39,  57,   0,  82,  59,   0, 247.5,  -5.0,
      "Dallas, TX",  32,  46,   0,  96,  47,   0, 167.9,  -6.0,
      "Denver, CO",  39,  44,   0, 104,  59,   0,1610.3,  -7.0,
      "Detroit, MI",  42,  20,   0,  83,   3,   0, 192.9,  -5.0,
      "El Paso, TX",  31,  45,   0, 106,  29,   0,1194.2,  -7.0,
      "Hartford, CT",  41,  46,   0,  72,  41,   0,  51.5,  -5.0,
      "Honolulu, HI",  21,  18,   0, 157,  51,   0,   2.1, -10.0,
      "Houston, TX",  29,  45,   0,  95,  21,   0,  29.3,  -6.0,
      "Indianapolis, IN",  39,  46,   0,  86,   9,   0, 241.4,  -5.0,
      "Kansas City, MO",  39,   5,   0,  94,  34,   0, 226.2,  -6.0,
      "Los Angeles, CA",  34,   3,   0, 118,  14,   0,  29.6,  -8.0,
      "Louisville, KY",  38,  15,   0,  85,  45,   0, 145.4,  -5.0,
      "Memphis, TN",  35,   8,   0,  90,   2,   0,  78.6,  -6.0,
      "Miami, FL",  25,  46,   0,  80,  11,   0,   2.1,  -5.0,
      "Milwaukee, WI",  43,   2,   0,  87,  54,   0, 204.8,  -6.0,
      "Minneapolis, MN",  44,  58,   0,  93,  15,   0, 254.2,  -6.0,
      "Nashville, TN",  36,   9,   0,  86,  47,   0, 179.8,  -6.0,
      "New Orleans, LA",  29,  57,   0,  90,   4,   0,   0.9,  -6.0,
      "New York, NY",  40,  43,   0,  74,   1,   0,  40.2,  -5.0,
      "Oklahoma City, OK",  35,  28,   0,  97,  30,   0, 391.7,  -6.0,
      "Philadelphia, PA",  39,  57,   0,  75,   9,   0,   1.5,  -5.0,
      "Phoenix, AZ",  33,  26,   0, 112,   4,   0, 340.5,  -7.0,
      "Pittsburgh, PA",  40,  26,   0,  79,  59,   0, 227.7,  -5.0,
      "Portland, OR",  45,  31,   0, 122,  40,   0,   6.4,  -8.0,
      "Providence, RI",  41,  49,   0,  71,  24,   0,  15.5,  -5.0,
      "Richmond, VA",  37,  33,   0,  77,  27,   0,  50.0,  -5.0,
      "Rochester, NY",  43,   9,   0,  77,  36,   0, 166.7,  -5.0,
      "Sacramento, CA",  38,  34,   0, 121,  29,   0,   9.1,  -8.0,
      "St. Louis, MO",  38,  37,   0,  90,  11,   0, 163.1,  -6.0,
      "St. Petersburg, FL",  27,  46,   0,  82,  40,   0,   6.1,  -5.0,
      "Salt Lake City, UT",  40,  45,   0, 111,  53,   0,1286.3,  -7.0,
      "San Antonio, TX",  29,  25,   0,  98,  29,   0, 240.2,  -6.0,
      "San Diego, CA",  32,  42,   0, 117,   9,   0,   4.0,  -8.0,
      "San Francisco, CA",  37,  46,   0, 122,  25,   0,   2.4,  -8.0,
      "Seattle, WA",  47,  36,   0, 122,  19,   0, 121.9,  -8.0,
      "Washington, DC",  38,  53,   0,  77,   2,   0,   4.3,  -5.0,
      "- - - MEXICO - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Acapulco, MEXICO",  16,  51,   0,  99,  55,   0,   3.0,  -6.0,
      "Chihuahua, MEXICO",  28,  38,   0, 106,   5,   0,1350.0,  -6.0,
      "Ciudad de Mexico, MEXICO",  19,  24,   0,  99,   9,   0,2237.2,  -6.0,
      "Ciudad de Naucalpan, MEXICO",  19,  28,   0,  99,  14,   0,   0.0,  -6.0,
      "Ciudad Juarez, MEXICO",  31,  44,   0, 106,  29,   0,   0.0,  -6.0,
      "Ecatepec de Morelos, MEXICO",  19,  35,   0,  99,   4,   0,   0.0,  -6.0,
      "Guadalajara, MEXICO",  20,  40,   0, 103,  20,   0,1583.1,  -6.0,
      "Guadalupe, MEXICO",  25,  41,   0, 100,  15,   0,   0.0,  -6.0,
      "Leon, MEXICO",  21,   7,   0, 101,  40,   0,   0.0,  -6.0,
      "Merida, MEXICO",  20,  58,   0,  89,  37,   0,  21.9,  -6.0,
      "Monterrey, MEXICO",  25,  40,   0, 100,  19,   0, 527.9,  -6.0,
      "Nezahualcoyoytl, MEXICO",  19,  27,   0,  99,   3,   0,   0.0,  -6.0,
      "Puebla, MEXICO",  19,   3,   0,  98,  12,   0,   0.0,  -6.0,
      "San Luis Potosi, MEXICO",  22,   9,   0, 100,  59,   0,   0.0,  -6.0,
      "Tijuana, MEXICO",  32,  32,   0, 117,   1,   0,   0.0,  -6.0,
      "Tlalnepantla, MEXICO",  19,  33,   0,  99,  12,   0,   0.0,  -6.0,
      "Torreon, MEXICO",  25,  33,   0, 103,  26,   0,   0.0,  -6.0,
      "Veracruz, MEXICO",  19,  11,   0,  96,   8,   0,  10.0,  -6.0,
      "Zapopan, MEXICO",  20,  43,   0, 103,  24,   0,   0.0,  -6.0,
      "- - - CENTRAL AMERICA - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Alajuela, COSTA RICA",  10,   1,   0,  84,  13,   0,   0.0,  -6.0,
      "San Jose, COSTA RICA",   9,  56,   0,  84,   5,   0,1146.0,  -6.0,
      "San Salvador, EL SALVADOR",  13,  42,   0,  89,  12,   0, 682.1,  -6.0,
      "Santa Ana, EL SALVADOR",  13,  59,   0,  89,  34,   0,   0.0,  -6.0,
      "Guatemala, GUATEMALA",  14,  38,   0,  90,  31,   0,1479.8,  -6.0,
      "San Pedro Sula, HONDURAS",  15,  27,   0,  88,   2,   0,   0.0,  -6.0,
      "Tegucigalpa, HONDURAS",  14,   6,   0,  87,  13,   0,   0.0,  -6.0,
      "Leon, NICARAGUA",  12,  26,   0,  86,  53,   0,   0.0,  -6.0,
      "Managua, NICARAGUA",  12,   9,   0,  86,  17,   0,   0.0,  -6.0,
      "Panama City, PANAMA",   8,  58,   0,  79,  32,   0,   0.0,  -5.0,
      "- - - CARIBBEAN - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Nassau, BAHAMAS",  25,   5,   0,  77,  21,   0,   3.7,  -5.0,
      "Bridgetown, BARBADOS",  13,   6,   0,  59,  37,   0,  55.2,  -4.0,
      "Havana, CUBA",  23,   8,   0,  82,  22,   0,  24.4,  -5.0,
      "Santiago de Cuba, CUBA",  20,   1,   0,  75,  49,   0,   0.0,  -5.0,
      "Santiago, DOMINICAN REPUBLIC",  19,  27,   0,  70,  42,   0,   0.0,  -4.0,
      "Santo Domingo, DOMINICAN REPUBLIC",  18,  28,   0,  69,  54,   0,  17.4,  -4.0,
      "Saint George's, GRENADA",  12,   3,   0,  61,  45,   0,   0.0,  -4.0,
      "Basse-Terre, GUADELOUPE",  16,   0,   0,  61,  43,  42,   0.0,  -4.0,
      "Pointe a Pitre, GUADELOUPE",  16,  14,  18,  61,  31,  30,   0.0,  -4.0,
      "Port-au-Prince, HAITI",  18,  32,   0,  72,  20,   0,  36.9,  -4.0,
      "Kingston, JAMAICA",  18,   0,   0,  76,  48,   0,  33.5,  -5.0,
      "Montego Bay, JAMAICA",  18,  28,   0,  77,  55,   0,   0.0,  -5.0,
      "Fort-de-France, MARTINIQUE",  14,  36,   0,  61,   5,   0,   4.0,  -4.0,
      "Oranjestad, Aruba, NETHERLANDS ANTILLES",  12,  31,   0,  70,   2,   0,   0.0,  -4.0,
      "Willemstad, Curacao, NETHERLANDS ANTILLES",  12,   6,  30,  68,  55,  48,   0.0,  -4.0,
      "Arecibo, PUERTO RICO",  18,  28,   0,  66,  43,   0,   0.0,  -4.0,
      "Ponce, PUERTO RICO",  18,   1,   0,  66,  37,   0,   0.0,  -4.0,
      "San Juan, PUERTO RICO",  18,  28,   0,  66,   7,   0,   4.0,  -4.0,
      "Castries, ST. LUCIA",  14,   1,   0,  61,   0,   0,   0.0,  -4.0,
      "Kingstown, ST. VINCENT & GRENADINES",  13,   9,   0,  61,  14,   0,   0.0,  -4.0,
      "Port-of-Spain, TRINIDAD & TOBAGO",  10,  39,   0,  61,  31,   0,  20.4,  -4.0,
      "Charlotte Am., St. Thomas, U.S. VIRGIN IS.",  18,  21,   0,  64,  56,   0,   3.4,  -4.0,
      "Road Town, Tortola, UK VIRGIN IS.",  18,  26,   0,  64,  37,   0,   0.0,  -4.0,
      "- - - BERMUDA - - -",  0,  0,  0,  0,  0,  0,  0,  0,
      "Hamilton, BERMUDA",  32,  17,   0,  64,  46,   0,  46.0,  -4.0
    )


    //
    // Observer constants -
    // (0) North Latitude (radians)
    // (1) West Longitude (radians)
    // (2) Altitude (metres)
    // (3) West time zone (hours)
    // (4) rho sin O'
    // (5) rho cos O'
    // (6) index into the elements array for the eclipse in question
    //
    // Note that correcting for refraction will involve creating a "virtual" altitude
    // for each contact, and hence a different value of rho and O' for each contact!
    //
    this.obsvconst = new Array();

    //
    // Eclipse circumstances
    //  (0) Event type (this.C1=-2, C2=-1, Mid=0, C3=1, this.C4=2)
    //  (1) t
    // -- time-only dependent circumstances (and their per-hour derivatives) follow --
    //  (2) x
    //  (3) y
    //  (4) d
    //  (5) sin d
    //  (6) cos d
    //  (7) mu
    //  (8) l1
    //  (9) l2
    // (10) dx
    // (11) dy
    // (12) dd
    // (13) dmu
    // (14) dl1
    // (15) dl2
    // -- time and location dependent circumstances follow --
    // (16) h
    // (17) sin h
    // (18) cos h
    // (19) xi
    // (20) eta
    // (21) zeta
    // (22) dxi
    // (23) deta
    // (24) u
    // (25) v
    // (26) a
    // (27) b
    // (28) l1'
    // (29) l2'
    // (30) n^2
    // -- observational circumstances follow --
    // (31) p
    // (32) alt
    // (33) q
    // (34) v
    // (35) azi
    // (36) m (this.mid eclipse only) or limb correction applied (where available!)
    // (37) magnitude (this.mid eclipse only)
    // (38) moon/sun (this.mid eclipse only)
    // (39) calculated local event type for a transparent earth (this.mid eclipse only)
    //      (0 = none, 1 = partial, 2 = annular, 3 = total)
    // (40) event visibility
    //      (0 = above horizon, 1 = below horizon, 2 = sunrise, 3 = sunset, 4 = below horizon, disregard)
    //

    this.month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul",
                          "Aug","Sep","Oct","Nov","Dec");

    this.c1 = new Array();
    this.c2 = new Array();
    this.mid = new Array();
    this.c3 = new Array();
    this.c4 = new Array();


    this.currenttimeperiod = "";
    this.loadedtimeperiods = new Array();

    this.init()
  }



  //
  // Populate the circumstances array with the time-only dependent circumstances (x, y, d, m, ...)
  timedependent(elements, circumstances) {
    var type, index, t, ans;

    t = circumstances[1]
    index = this.obsvconst[6]
    // Calculate x
    ans = elements[9+index] * t + elements[8+index]
    ans = ans * t + elements[7+index]
    ans = ans * t + elements[6+index]
    circumstances[2] = ans
    // Calculate dx
    ans = 3.0 * elements[9+index] * t + 2.0 * elements[8+index]
    ans = ans * t + elements[7+index]
    circumstances[10] = ans
    // Calculate y
    ans = elements[13+index] * t + elements[12+index]
    ans = ans * t + elements[11+index]
    ans = ans * t + elements[10+index]
    circumstances[3] = ans
    // Calculate dy
    ans = 3.0 * elements[13+index] * t + 2.0 * elements[12+index]
    ans = ans * t + elements[11+index]
    circumstances[11] = ans
    // Calculate d
    ans = elements[16+index] * t + elements[15+index]
    ans = ans * t + elements[14+index]
    ans = ans * Math.PI / 180.0
    circumstances[4] = ans
    // sin d and cos d
    circumstances[5] = Math.sin(ans)
    circumstances[6] = Math.cos(ans)
    // Calculate dd
    ans = 2.0 * elements[16+index] * t + elements[15+index]
    ans = ans * Math.PI / 180.0
    circumstances[12] = ans
    // Calculate m
    ans = elements[19+index] * t + elements[18+index]
    ans = ans * t + elements[17+index]
    if (ans >= 360.0) {
      ans = ans - 360.0
    }
    ans = ans * Math.PI / 180.0
    circumstances[7] = ans
    // Calculate dm
    ans = 2.0 * elements[19+index] * t + elements[18+index]
    ans = ans * Math.PI / 180.0
    circumstances[13] = ans
    // Calculate l1 and dl1
    type = circumstances[0]
    if ((type == -2) || (type == 0) || (type == 2)) {
      ans = elements[22+index] * t + elements[21+index]
      ans = ans * t + elements[20+index]
      circumstances[8] = ans
      circumstances[14] = 2.0 * elements[22+index] * t + elements[21+index]
    }
    // Calculate l2 and dl2
    if ((type == -1) || (type == 0) || (type == 1)) {
      ans = elements[25+index] * t + elements[24+index]
      ans = ans * t + elements[23+index]
      circumstances[9] = ans
      circumstances[15] = 2.0 * elements[25+index] * t + elements[24+index]
    }
    return circumstances
  }

  //
  // Populate the circumstances array with the time and location dependent circumstances
  timelocdependent(elements,circumstances) {
    var ans, index, type

    this.timedependent(elements,circumstances)
    index = this.obsvconst[6]
    // Calculate h, sin h, cos h
    circumstances[16] = circumstances[7] - this.obsvconst[1] - (elements[index+5] / 13713.44)
    circumstances[17] = Math.sin(circumstances[16])
    circumstances[18] = Math.cos(circumstances[16])
    // Calculate xi
    circumstances[19] = this.obsvconst[5] * circumstances[17]
    // Calculate eta
    circumstances[20] = this.obsvconst[4] * circumstances[6] - this.obsvconst[5] * circumstances[18] * circumstances[5]
    // Calculate zeta
    circumstances[21] = this.obsvconst[4] * circumstances[5] + this.obsvconst[5] * circumstances[18] * circumstances[6]
    // Calculate dxi
    circumstances[22] = circumstances[13] * this.obsvconst[5] * circumstances[18]
    // Calculate deta
    circumstances[23] = circumstances[13] * circumstances[19] * circumstances[5] - circumstances[21] * circumstances[12]
    // Calculate u
    circumstances[24] = circumstances[2] - circumstances[19]
    // Calculate v
    circumstances[25] = circumstances[3] - circumstances[20]
    // Calculate a
    circumstances[26] = circumstances[10] - circumstances[22]
    // Calculate b
    circumstances[27] = circumstances[11] - circumstances[23]
    // Calculate l1'
    type = circumstances[0]
    if ((type == -2) || (type == 0) || (type == 2)) {
      circumstances[28] = circumstances[8] - circumstances[21] * elements[26+index]
    }
    // Calculate l2'
    if ((type == -1) || (type == 0) || (type == 1)) {
      circumstances[29] = circumstances[9] - circumstances[21] * elements[27+index]
    }
    // Calculate n^2
    circumstances[30] = circumstances[26] * circumstances[26] + circumstances[27] * circumstances[27]
    return circumstances
  }

  //
  // Iterate on C1 or C4
  c1c4iterate(elements,circumstances) {
    var sign, iter, tmp, n

    this.timelocdependent(elements,circumstances)
    if (circumstances[0] < 0) {
      sign=-1.0
    } else {
      sign=1.0
    }
    tmp=1.0
    iter=0
    while (((tmp > 0.000001) || (tmp < -0.000001)) && (iter < 50)) {
      n = Math.sqrt(circumstances[30])
      tmp = circumstances[26] * circumstances[25] - circumstances[24] * circumstances[27]
      tmp = tmp / n / circumstances[28]
      tmp = sign * Math.sqrt(1.0 - tmp * tmp) * circumstances[28] / n
      tmp = (circumstances[24] * circumstances[26] + circumstances[25] * circumstances[27]) / circumstances[30] - tmp
      circumstances[1] = circumstances[1] - tmp
      this.timelocdependent(elements,circumstances)
      iter++
    }
    return circumstances
  }

  //
  // Get C1 and C4 data
  //   Entry conditions -
  //   1. The mid array must be populated
  //   2. The magnitude at mid eclipse must be > 0.0
  getc1c4(elements) {
    var tmp, n

    n = Math.sqrt(this.mid[30])
    tmp = this.mid[26] * this.mid[25] - this.mid[24] * this.mid[27]
    tmp = tmp / n / this.mid[28]
    tmp = Math.sqrt(1.0 - tmp * tmp) * this.mid[28] / n
    this.c1[0] = -2
    this.c4[0] = 2
    this.c1[1] = this.mid[1] - tmp
    this.c4[1] = this.mid[1] + tmp
    this.c1c4iterate(elements,this.c1)
    this.c1c4iterate(elements,this.c4)
  }

  //
  // Iterate on C2 or C3
  c2c3iterate(elements,circumstances) {
    var sign, iter, tmp, n

    this.timelocdependent(elements,circumstances)
    if (circumstances[0] < 0) {
      sign=-1.0
    } else {
      sign=1.0
    }
    if (this.mid[29] < 0.0) {
      sign = -sign
    }
    tmp=1.0
    iter=0
    while (((tmp > 0.000001) || (tmp < -0.000001)) && (iter < 50)) {
      n = Math.sqrt(circumstances[30])
      tmp = circumstances[26] * circumstances[25] - circumstances[24] * circumstances[27]
      tmp = tmp / n / circumstances[29]
      tmp = sign * Math.sqrt(1.0 - tmp * tmp) * circumstances[29] / n
      tmp = (circumstances[24] * circumstances[26] + circumstances[25] * circumstances[27]) / circumstances[30] - tmp
      circumstances[1] = circumstances[1] - tmp
      this.timelocdependent(elements,circumstances)
      iter++
    }
    return circumstances
  }

  //
  // Get C2 and C3 data
  //   Entry conditions -
  //   1. The mid array must be populated
  //   2. There must be either a total or annular eclipse at the location!
  getc2c3(elements) {
    var tmp, n

    n = Math.sqrt(this.mid[30])
    tmp = this.mid[26] * this.mid[25] - this.mid[24] * this.mid[27]
    tmp = tmp / n / this.mid[29]
    tmp = Math.sqrt(1.0 - tmp * tmp) * this.mid[29] / n
    this.c2[0] = -1
    this.c3[0] = 1
    if (this.mid[29] < 0.0) {
      this.c2[1] = this.mid[1] + tmp
      this.c3[1] = this.mid[1] - tmp
    } else {
      this.c2[1] = this.mid[1] - tmp
      this.c3[1] = this.mid[1] + tmp
    }
    this.c2c3iterate(elements,this.c2)
    this.c2c3iterate(elements,this.c3)
  }

  //
  // Get the observational circumstances
  observational(circumstances) {
    var contacttype, coslat, sinlat

    // We are looking at an "external" contact UNLESS this is a total eclipse AND we are looking at
    // c2 or c3, in which case it is an INTERNAL contact! Note that if we are looking at mid eclipse,
    // then we may not have determined the type of eclipse (this.mid[39]) just yet!
    if (circumstances[0] == 0) {
      contacttype = 1.0
    } else {
      if ((this.mid[39] == 3) && ((circumstances[0] == -1) || (circumstances[0] == 1))) {
        contacttype = -1.0
      } else {
        contacttype = 1.0
      }
    }
    // Calculate p
    circumstances[31] = Math.atan2(contacttype*circumstances[24], contacttype*circumstances[25])
    // Calculate alt
    sinlat = Math.sin(this.obsvconst[0])
    coslat = Math.cos(this.obsvconst[0])
    circumstances[32] = Math.asin(circumstances[5] * sinlat + circumstances[6] * coslat * circumstances[18])
    // Calculate q
    circumstances[33] = Math.asin(coslat * circumstances[17] / Math.cos(circumstances[32]))
    if (circumstances[20] < 0.0) {
      circumstances[33] = Math.PI - circumstances[33]
    }
    // Calculate v
    circumstances[34] = circumstances[31] - circumstances[33]
    // Calculate azi
    circumstances[35] = Math.atan2(-1.0*circumstances[17]*circumstances[6], circumstances[5]*coslat - circumstances[18]*sinlat*circumstances[6])
    // Calculate visibility
    if (circumstances[32] > -0.00524) {
      circumstances[40] = 0
    } else {
      circumstances[40] = 1
    }
  }

  //
  // Get the observational circumstances for mid eclipse
  midobservational() {
    this.observational(this.mid)
    // Calculate m, magnitude and moon/sun
    this.mid[36] = Math.sqrt(this.mid[24]*this.mid[24] + this.mid[25]*this.mid[25])
    this.mid[37] = (this.mid[28] - this.mid[36]) / (this.mid[28] + this.mid[29])
    this.mid[38] = (this.mid[28] - this.mid[29]) / (this.mid[28] + this.mid[29])
  }

  //
  // Calculate mid eclipse
  getmid(elements) {
    var iter, tmp

    this.mid[0] = 0
    this.mid[1] = 0.0
    iter = 0
    tmp = 1.0
    this.timelocdependent(elements,this.mid)
    while (((tmp > 0.000001) || (tmp < -0.000001)) && (iter < 50)) {
      tmp = (this.mid[24] * this.mid[26] + this.mid[25] * this.mid[27]) / this.mid[30]
      this.mid[1] = this.mid[1] - tmp
      iter++
      this.timelocdependent(elements,this.mid)
    }
  }

  //
  // Calculate the time of sunrise or sunset
  getsunriset(elements,circumstances,riset) {
    var h0, diff, iter

    diff = 1.0
    iter = 0
    while ((diff > 0.00001) || (diff < -0.00001)) {
      iter++
      if (iter == 4) return
      h0 = Math.acos((Math.sin(-0.00524) - Math.sin(this.obsvconst[0]) * circumstances[5])/Math.cos(this.obsvconst[0])/circumstances[6])
      diff = (riset * h0 - circumstances[16])/circumstances[13];
      while (diff >= 12.0) diff -= 24.0;
      while (diff <= -12.0) diff += 24.0;
      circumstances[1] += diff
      this.timelocdependent(elements,circumstances)
    }
  }

  //
  // Calculate the time of sunrise
  getsunrise(elements,circumstances) {
    this.getsunriset(elements,circumstances,-1.0)
  }

  //
  // Calculate the time of sunset
  getsunset(elements,circumstances) {
    this.getsunriset(elements,circumstances,1.0)
  }

  //
  // Copy a set of circumstances
  copycircumstances(circumstancesfrom, circumstancesto) {
    var i;

    for (var i = 1 ; i < 41 ; i++) {
      circumstancesto[i] = circumstancesfrom[i];
    }
  }

  //
  // Populate the c1, c2, mid, c3 and c4 arrays
  getall(elements) {
    var pattern

    this.getmid(elements)
    this.midobservational()
    if (this.mid[37] > 0.0) {
      this.getc1c4(elements)
      if ((this.mid[36] < this.mid[29]) || (this.mid[36] < -this.mid[29])) {
        this.getc2c3(elements)
        if (this.mid[29] < 0.0) {
          this.mid[39] = 3 // Total eclipse
        } else {
          this.mid[39] = 2 // Annular eclipse
        }
        this.observational(this.c1)
        this.observational(this.c2)
        this.observational(this.c3)
        this.observational(this.c4)
        this.c2[36] = 999.9
        this.c3[36] = 999.9
        // Calculate how much of the eclipse is above the horizon
        pattern = 0
        if (this.c1[40] == 0) { pattern += 10000 }
        if (this.c2[40] == 0) { pattern += 1000 }
        if (this.mid[40] == 0) { pattern += 100 }
        if (this.c3[40] == 0) { pattern += 10 }
        if (this.c4[40] == 0) { pattern += 1 }
        // Now, time to make sure that all my observational[39] and observational[40] are OK
        if (pattern == 11110) {
          this.getsunset(elements,this.c4)
          this.observational(this.c4)
          this.c4[40] = 3
        } else if (pattern == 11100) {
          this.getsunset(elements,this.c3)
          this.observational(this.c3)
          this.c3[40] = 3
          this.copycircumstances(this.c3, this.c4);
        } else if (pattern == 11000) {
          this.c3[40] = 4
          this.getsunset(elements,this.mid)
          this.midobservational()
          this.mid[40] = 3
          this.copycircumstances(this.mid, this.c4)
        } else if (pattern == 10000) {
          this.mid[39] = 1
          this.getsunset(elements,this.mid)
          this.midobservational()
          this.mid[40] = 3
          this.copycircumstances(this.mid, this.c4)
        } else if (pattern == 1111) {
          this.getsunrise(elements,this.c1)
          this.observational(this.c1)
          this.c1[40] = 2
        } else if (pattern == 111) {
          this.getsunrise(elements,this.c2)
          this.observational(this.c2)
          this.c2[40] = 2
          this.copycircumstances(this.c2, this.c1)
        } else if (pattern == 11) {
          this.c2[40] = 4
          this.getsunrise(elements,this.mid)
          this.midobservational()
          this.mid[40] = 2
          this.copycircumstances(this.mid, this.c1)
        } else if (pattern == 1) {
          this.mid[39] = 1
          this.getsunrise(elements,this.mid)
          this.midobservational()
          this.mid[40] = 2
          this.copycircumstances(this.mid, this.c1)
        } else if (pattern == 0) {
          this.mid[39] = 0
        }
        // There are other patterns, but those are the only ones we're covering!
     } else {
        this.mid[39] = 1 // Partial eclipse
        pattern = 0
        this.observational(this.c1)
        this.observational(this.c4)
        if (this.c1[40] == 0) { pattern += 100 }
        if (this.mid[40] == 0) { pattern += 10 }
        if (this.c4[40] == 0) { pattern += 1 }
        if (pattern == 110) {
          this.getsunset(elements,this.c4)
          this.observational(this.c4)
          this.c4[40] = 3
        } else if (pattern == 100) {
          this.getsunset(elements,this.mid)
          this.midobservational()
          this.mid[40] = 3
          this.copycircumstances(this.mid, this.c4)
        } else if (pattern == 11) {
          this.getsunrise(elements,this.c1)
          this.observational(this.c1)
          this.c1[40] = 2
        } else if (pattern == 1) {
          this.getsunrise(elements,this.mid)
          this.midobservational()
          this.mid[40] = 2
          this.copycircumstances(this.mid, this.c1)
        } else if (pattern == 0) {
          this.mid[39]=0
        }
        // There are other patterns, but those are the only ones we're covering!
      }
    } else {
      this.mid[39] = 0 // No eclipse
    }
    // Magnitude for total and annular eclipse is moon/sun ratio
    if ((this.mid[39] == 2) || (this.mid[39] == 3)) {
       this.mid[37] = this.mid[38]
    }
  }

  //
  // Read the data that's in the form, and populate the this.obsvconst array
  readform() {
    var tmp

    // Make sure that we have something to parse from the form
    if (document.eclipseform.latd.value == "") document.eclipseform.latd.value="0"
    if (document.eclipseform.latm.value == "") document.eclipseform.latm.value="0"
    if (document.eclipseform.lats.value == "") document.eclipseform.lats.value="0"
    if (document.eclipseform.lond.value == "") document.eclipseform.lond.value="0"
    if (document.eclipseform.lonm.value == "") document.eclipseform.lonm.value="0"
    if (document.eclipseform.lons.value == "") document.eclipseform.lons.value="0"
    if (document.eclipseform.alt.value == "") document.eclipseform.alt.value="0"

    // Write back to the form what we are parsing
    document.eclipseform.latd.value=Math.abs(parseFloat(document.eclipseform.latd.value))
    document.eclipseform.latm.value=Math.abs(parseFloat(document.eclipseform.latm.value))
    document.eclipseform.lats.value=Math.abs(parseFloat(document.eclipseform.lats.value))
    document.eclipseform.lond.value=Math.abs(parseFloat(document.eclipseform.lond.value))
    document.eclipseform.lonm.value=Math.abs(parseFloat(document.eclipseform.lonm.value))
    document.eclipseform.lons.value=Math.abs(parseFloat(document.eclipseform.lons.value))
    document.eclipseform.alt.value=Math.abs(parseFloat(document.eclipseform.alt.value))

    // Get the latitude
    this.obsvconst[0]=parseFloat(document.eclipseform.latd.value)+parseFloat(document.eclipseform.latm.value)/60.0+parseFloat(document.eclipseform.lats.value)/3600.0
    this.obsvconst[0]=this.obsvconst[0]*parseFloat(document.eclipseform.latx.options[document.eclipseform.latx.selectedIndex].value)
    this.obsvconst[0]=this.obsvconst[0]*Math.PI/180.0

    // Get the longitude
    this.obsvconst[1]=parseFloat(document.eclipseform.lond.value)+parseFloat(document.eclipseform.lonm.value)/60.0+parseFloat(document.eclipseform.lons.value)/3600.0
    this.obsvconst[1]=this.obsvconst[1]*parseFloat(document.eclipseform.lonx.options[document.eclipseform.lonx.selectedIndex].value)
    this.obsvconst[1]=this.obsvconst[1]*Math.PI/180.0

    // Get the altitude
    this.obsvconst[2]=parseFloat(document.eclipseform.alt.value)

    // Get the time zone
    this.obsvconst[3]=parseFloat(document.eclipseform.tzm.options[document.eclipseform.tzm.selectedIndex].value)
    this.obsvconst[3]=parseFloat(document.eclipseform.tzh.options[document.eclipseform.tzh.selectedIndex].value) + this.obsvconst[3]/60.0
    this.obsvconst[3]=parseFloat(document.eclipseform.tzx.options[document.eclipseform.tzx.selectedIndex].value) * this.obsvconst[3]

    // Get the observer's geocentric position
    tmp=Math.atan(0.99664719*Math.tan(this.obsvconst[0]))
    this.obsvconst[4]=0.99664719*Math.sin(tmp)+(this.obsvconst[2]/6378140.0)*Math.sin(this.obsvconst[0])
    this.obsvconst[5]=Math.cos(tmp)+(this.obsvconst[2]/6378140.0*Math.cos(this.obsvconst[0]))

    // The index of the selected eclipse...
    //this.obsvconst[6] = 28 * (parseInt(document.eclipseform.index.options[document.eclipseform.index.selectedIndex].value) + 65)

  }

  //
  // Get the local date of an event
  getdate(elements,circumstances) {
    var t, ans, jd, a, b, c, d, e, index

    index = this.obsvconst[6]
    // Calculate the JD for noon (TDT) the day before the day that contains T0
    jd = Math.floor(elements[index] - (elements[1+index]/24.0))
    // Calculate the local time (ie the offset in hours since midnight TDT on the day containing T0).
    t = circumstances[1] + elements[1+index] - this.obsvconst[3] - (elements[4+index] - 0.5) / 3600.0
    if (t < 0.0) {
      jd--;
    }
    if (t >= 24.0) {
      jd++;
    }
    if (jd >= 2299160.0) {
      a = Math.floor((jd - 1867216.25) / 36524.25)
      a = jd + 1 + a - Math.floor(a/4);
    } else {
      a = jd;
    }
    b = a + 1525.0
    c = Math.floor((b-122.1)/365.25)
    d = Math.floor(365.25*c)
    e = Math.floor((b - d) / 30.6001)
    d = b - d - Math.floor(30.6001*e)
    if (e < 13.5) {
      e = e - 1
    } else {
      e = e - 13
    }
    if (e > 2.5) {
      ans = c - 4716 + "-"
    } else {
      ans = c - 4715 + "-"
    }
    ans += this.month[e-1] + "-"
    if (d < 10) {
      ans = ans + "0"
    }
    ans = ans + d
    return ans
  }

  //
  // Get the local time of an event
  gettime(elements,circumstances) {
    var t, ans, index

    ans = ""
    index = this.obsvconst[6]
    t = circumstances[1] + elements[1+index] - this.obsvconst[3] - (elements[4+index] - 0.5) / 3600.0
    if (t < 0.0) {
      t = t + 24.0
    }
    if (t >= 24.0) {
      t = t - 24.0
    }
    if (t < 10.0) {
      ans = ans + "0"
    }
    ans = ans + Math.floor(t) + ":"
    t = (t * 60.0) - 60.0 * Math.floor(t)
    if (t < 10.0) {
      ans = ans + "0"
    }
    ans = ans + Math.floor(t)
    if (circumstances[40] <= 1) { // not sunrise or sunset
      ans = ans + ":"
      t = (t * 60.0) - 60.0 * Math.floor(t)
      if (t < 10.0) {
        ans = ans + "0"
      }
      ans = ans + Math.floor(t)
    }
    if (circumstances[40] == 1) {
      html = document.createElement("font");
      html.setAttribute("color","#808080");
      ital = document.createElement("i");
      ital.appendChild(document.createTextNode(ans));
      html.appendChild(ital);
      return html;
    } else if (circumstances[40] == 2) {
      return document.createTextNode(ans+"(r)");
    } else if (circumstances[40] == 3) {
      return document.createTextNode(ans+"(s)");
    } else {
      return document.createTextNode(ans);
    }
  }

  //
  // Get the altitude
  getalt(circumstances) {
    var t, ans

    if (circumstances[40] == 2) {
      return document.createTextNode("0(r)");
    }
    if (circumstances[40] == 3) {
      return document.createTextNode("0(s)");
    }
    if ((circumstances[32] < 0.0) && (circumstances[32] >= -0.00524)) {
      // Crude correction for refraction (and for consistency's sake)
      t = 0.0
    } else {
      t = circumstances[32] * 180.0 / Math.PI
    }
    if (t < 0.0) {
      ans = "-"
      t = -t
    } else {
      ans = ""
    }
    t = Math.floor(t+0.5)
    if (t < 10.0) {
      ans = ans + "0"
    }
    ans = ans + t
    if (circumstances[40] == 1) {
      html = document.createElement("font");
      html.setAttribute("color","#808080");
      ital = document.createElement("i");
      ital.appendChild(document.createTextNode(ans));
      html.appendChild(ital);
      return html;
    } else {
      return document.createTextNode(ans);
    }
  }

  //
  // Get the azimuth
  getazi(circumstances) {
    var t, ans

    ans = ""
    t = circumstances[35] * 180.0 / Math.PI
    if (t < 0.0) {
      t = t + 360.0
    }
    if (t >= 360.0) {
      t = t - 360.0
    }
    t = Math.floor(t + 0.5)
    if (t < 100.0) {
      ans = ans + "0"
    }
    if (t < 10.0) {
      ans = ans + "0"
    }
    ans = ans + t
    if (circumstances[40] == 1) {
      html = document.createElement("font");
      html.setAttribute("color","#808080");
      ital = document.createElement("i");
      ital.appendChild(document.createTextNode(ans));
      html.appendChild(ital);
     return html;
    } else {
      return document.createTextNode(ans);
    }
  }

  //
  // Get the duration in mm:ss.s format
  //
  // Adapted from code written by Stephen McCann - 27/04/2001
  getduration() {
    var tmp,ans;

    if (this.c3[40] == 4) {
      tmp = this.mid[1]-this.c2[1]
    } else if (this.c2[40] == 4) {
      tmp = this.c3[1]-this.mid[1]
    } else {
      tmp=this.c3[1]-this.c2[1];
    }
    if (tmp<0.0) {
      tmp=tmp+24.0
    } else if (tmp >= 24.0) {
      tmp=tmp-24.0
    }
    tmp=(tmp*60.0)-60.0*Math.floor(tmp)+0.05/60.0;
    ans=Math.floor(tmp)+"m"
    tmp=(tmp*60.0)-60.0*Math.floor(tmp)
    if (tmp < 10.0) {
      ans=ans+"0"
    }
    ans+=Math.floor(tmp)+"s"
    return ans
  }

  //
  // Get the magnitude
  getmagnitude() {
    var a

    a = Math.floor(1000.0*this.mid[37]+0.5)/1000.0
    if (this.mid[40] == 1) {
      html = document.createElement("font");
      html.setAttribute("color","#808080");
      ital = document.createElement("i");
      ital.appendChild(document.createTextNode(a));
      html.appendChild(ital);
      return html;
    }
    if (this.mid[40] == 2) {
      a = a + "(r)"
    }
    if (this.mid[40] == 3) {
      a = a + "(s)"
    }
    return document.createTextNode(a);
  }

  //
  // Get the coverage
  getcoverage() {
    var a, b, c

    if (this.mid[37] <= 0.0) {
      a = "0.0"
    } else if (this.mid[37] >= 1.0) {
      a = "1.000"
    } else {
      if (this.mid[39] == 2) {
        c = this.mid[38] * this.mid[38]
      } else {
        c = Math.acos((this.mid[28]*this.mid[28] + this.mid[29]*this.mid[29] - 2.0*this.mid[36]*this.mid[36]) / (this.mid[28]*this.mid[28] - this.mid[29]*this.mid[29]))
        b = Math.acos((this.mid[28]*this.mid[29] + this.mid[36]*this.mid[36])/this.mid[36]/(this.mid[28]+this.mid[29]))
        a = Math.PI - b - c
        c = ((this.mid[38]*this.mid[38]*a + b) - this.mid[38]*Math.sin(c))/Math.PI
      }
      a = Math.floor(1000.0*c+0.5)/1000.0
    }
    if (this.mid[40] == 1) {
      html = document.createElement("font");
      html.setAttribute("color","#808080");
      ital = document.createElement("i");
      ital.appendChild(document.createTextNode(a));
      html.appendChild(ital);
      return html;
    }
    if (this.mid[40] == 2) {
      a = a + "(r)"
    }
    if (this.mid[40] == 3) {
      a = a + "(s)"
    }
    return document.createTextNode(a);
  }

  clearoldresults() {
    var results = document.getElementById("el_results");
    var resultsTable = document.getElementById("el_locationtable");
    if (resultsTable != null) results.removeChild(resultsTable);
    resultsTable = document.getElementById("el_resultstable");
    if (resultsTable != null) results.removeChild(resultsTable);
  }

  // CALCULATE!
  calculatefor(el) {
    this.readform()
    this.clearoldresults();
    var results = document.getElementById("el_results");
    var p = document.createElement("p");
    p.setAttribute("id","el_locationtable");
    var b = document.createElement("h2");
    b.appendChild(document.createTextNode("Solar Eclipses visible from  "+document.eclipseform.loc_name.value));
    p.appendChild(b);
    var resultsTable = document.createElement("table");
    resultsTable.setAttribute("border","0");
    var tbody = document.createElement("tbody");
    var row = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("align","right");
    td.setAttribute("nowrap","");
    td.appendChild(document.createTextNode("Latitude: "));
    row.appendChild(td);
    td = document.createElement("td");
    td.setAttribute("nowrap","");
    var text = document.eclipseform.latd.value;
    text += "\u00b0 ";
    if (document.eclipseform.latm.value < 10) text += "0";
    text += document.eclipseform.latm.value;
    text += "' ";
    if (document.eclipseform.lats.value < 10) text += "0";
    text += document.eclipseform.lats.value;
    text += '" ';
    text += (document.eclipseform.latx.options[document.eclipseform.latx.selectedIndex]).text;
    td.appendChild(document.createTextNode(text));
    row.appendChild(td);
    tbody.appendChild(row);
    row = document.createElement("tr");
    td = document.createElement("td");
    td.setAttribute("align","right");
    td.setAttribute("nowrap","");
    td.appendChild(document.createTextNode("Longitude: "));
    row.appendChild(td);
    td = document.createElement("td");
    td.setAttribute("nowrap","");
    text = document.eclipseform.lond.value;
    text += "\u00b0 ";
    if (document.eclipseform.lonm.value < 10) text += "0";
    text += document.eclipseform.lonm.value;
    text += "' ";
    if (document.eclipseform.lons.value < 10) text += "0";
    text += document.eclipseform.lons.value;
    text += '" ';
    text += (document.eclipseform.lonx.options[document.eclipseform.lonx.selectedIndex]).text;
    td.appendChild(document.createTextNode(text));
    row.appendChild(td);
    tbody.appendChild(row);
    row = document.createElement("tr");
    td = document.createElement("td");
    td.setAttribute("align","right");
    td.setAttribute("nowrap","");
    td.appendChild(document.createTextNode("Altitude: "));
    row.appendChild(td);
    td = document.createElement("td");
    td.setAttribute("nowrap","");
    text = document.eclipseform.alt.value;
    text += "m";
    td.appendChild(document.createTextNode(text));
    row.appendChild(td);
    tbody.appendChild(row);
    row = document.createElement("tr");
    td = document.createElement("td");
    td.setAttribute("align","right");
    td.setAttribute("nowrap","");
    td.appendChild(document.createTextNode("Time Zone: "));
    row.appendChild(td);
    td = document.createElement("td");
    td.setAttribute("nowrap","");
    text = (document.eclipseform.tzh.options[document.eclipseform.tzh.selectedIndex]).text;
    text += ":";
    text += (document.eclipseform.tzm.options[document.eclipseform.tzm.selectedIndex]).text;
    text += " ";
    text += (document.eclipseform.tzx.options[document.eclipseform.tzx.selectedIndex]).text;
    td.appendChild(document.createTextNode(text));
    row.appendChild(td);
    tbody.appendChild(row);
    resultsTable.appendChild(tbody);
    p.appendChild(resultsTable);
    results.appendChild(p);

    resultsTable = document.createElement("table");
    resultsTable.setAttribute("id","el_resultstable");
    resultsTable.setAttribute("width","150");
    resultsTable.setAttribute("border","2");
    tbody = document.createElement("tbody");
    row = document.createElement("tr");
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Calendar Date"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Eclipse Type"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Partial Eclipse Begins"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Sun Alt"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("A or T Eclipse Begins"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Maximum Eclipse"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Sun Alt"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Sun Azi"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("A or T Eclipse Ends"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Partial Eclipse Ends"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Sun Alt"));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Eclipse Mag."));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("Eclipse Obs."));
    row.appendChild(td);
    td = document.createElement("th");
    td.appendChild(document.createTextNode("A or T Eclipse Duration"));
    row.appendChild(td);
    tbody.appendChild(row);
    for (var i = 0 ; i < el.length ; i+=28) {
      this.obsvconst[6]=i;
      this.getall(el)
      // Is there an event...
      if (this.mid[39] > 0) {
        row = document.createElement("tr");
        td = document.createElement("td");
        td.setAttribute("nowrap","")
        var val = document.createTextNode(this.getdate(el,this.mid));
        td.appendChild(val);
        row.appendChild(td);
        td = document.createElement("td");
        td.setAttribute("align","center");
        if (this.mid[39] == 1) {
       val = document.createTextNode("P");
        } else if (this.mid[39] == 2) {
          val = document.createTextNode("A");
        } else {
          val = document.createTextNode("T");
        }
    td.appendChild(val);
    row.appendChild(td);
        // Partial eclipse start
        if (this.c1[40] == 4) {
          td = document.createElement("td")
          td.setAttribute("align","center")
          td.appendChild(document.createTextNode("-"))
          row.appendChild(td)
          td = document.createElement("td")
          td.appendChild(document.createTextNode("\u00a0"))
          row.appendChild(td)
        } else {
      // Partial eclipse start time
      td = document.createElement("td");
          td.setAttribute("nowrap","")
          td.appendChild(this.gettime(el,this.c1));
      row.appendChild(td);
      // Partial eclipse alt
      td = document.createElement("td");
      td.setAttribute("align","right");
      td.appendChild(this.getalt(this.c1));
      row.appendChild(td);
        }
    // Central eclipse time
    td = document.createElement("td");
    if ((this.mid[39] > 1) && (this.c2[40] != 4)) {
          td.setAttribute("nowrap","")
          td.appendChild(this.gettime(el,this.c2));
    } else {
      td.setAttribute("align","center");
      td.appendChild(document.createTextNode("-"));
    }
    row.appendChild(td);
    // Maximum eclipse time
    td = document.createElement("td");
        td.setAttribute("nowrap","")
    td.appendChild(this.gettime(el,this.mid));
    row.appendChild(td);
    // Maximum eclipse alt
    td = document.createElement("td");
    td.setAttribute("align","right");
    td.appendChild(this.getalt(this.mid));
    row.appendChild(td);
    // Maximum eclipse azi
    td = document.createElement("td");
    td.setAttribute("align","right");
    td.appendChild(this.getazi(this.mid));
    row.appendChild(td);
    // Central eclipse ends
    td = document.createElement("td");
    if ((this.mid[39] > 1) && (this.c3[40] != 4)) {
          td.setAttribute("nowrap","")
      td.appendChild(this.gettime(el,this.c3));
    } else {
      td.setAttribute("align","center");
      td.appendChild(document.createTextNode("-"));
    }
    row.appendChild(td);
        // Partial eclipse ends
        if (this.c4[40] == 4) {
          td = document.createElement("td")
          td.setAttribute("align","center")
          td.appendChild(document.createTextNode("-"))
          row.appendChild(td)
          td = document.createElement("td")
          td.appendChild(document.createTextNode("\u00a0"))
          row.appendChild(td)
        } else {
      // Partial eclipse ends
      td = document.createElement("td");
          td.setAttribute("nowrap","")
          td.appendChild(this.gettime(el,this.c4));
      row.appendChild(td);
      // ... sun alt
      td = document.createElement("td");
      td.setAttribute("align","right");
      td.appendChild(this.getalt(this.c4));
      row.appendChild(td);
        }
    // Eclipse magnitude
    td = document.createElement("td");
    td.appendChild(this.getmagnitude());
    row.appendChild(td);
    // Coverage
    td = document.createElement("td");
    td.appendChild(this.getcoverage());
    row.appendChild(td);
    // Central duration
    td = document.createElement("td");
    if (this.mid[39] > 1) {
      td.setAttribute("align","right");
          td.setAttribute("nowrap","")
      val = document.createTextNode(this.getduration());
    } else {
      td.setAttribute("align","center");
      val = document.createTextNode("-");
    }
    td.appendChild(val);
    row.appendChild(td);
    tbody.appendChild(row);
      }
    }
    resultsTable.appendChild(tbody);
    results.appendChild(resultsTable);
  }

  init() {
    console.log('this.init()')
    var opt = document.getElementById("el_cities");
    for (var i = 0 ; i < this.cities.length ; i+=9) {
      name = String(this.cities[i]);
      if (name.indexOf("--",0) == 0) {
        group = document.createElement("optgroup");
        group.setAttribute("label",name.substring(2));
        opt.appendChild(group);
        i++;
      }
      var city = document.createElement("option");
      city.setAttribute("value",i);
      var cityName = document.createTextNode(this.cities[i]);
      city.appendChild(cityName);
      opt.appendChild(city);
    }
  }

  citychange() {
    console.log('this.citychange()')
    this.clearoldresults();
    var index = Number(document.eclipseform.cityndx.value);
    if (index <= 0) return;
    var hemisphere=0;
    document.eclipseform.loc_name.value = this.cities[index++];
    var val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.latd.value = val;
    val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.latm.value = val;
    val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.lats.value = val;
    document.eclipseform.latx.selectedIndex = hemisphere;
    hemisphere=0;
    val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.lond.value = val;
    val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.lonm.value = val;
    val = this.cities[index++];
    if (val < 0) { val=-val; hemisphere=1; }
    document.eclipseform.lons.value = val;
    document.eclipseform.lonx.selectedIndex = hemisphere;
    document.eclipseform.alt.value=this.cities[index++];
    val = this.cities[index];
    if (val < 0) {
      document.eclipseform.tzx.selectedIndex=1;
      val = -val;
    } else {
      document.eclipseform.tzx.selectedIndex=0;
    }
    document.eclipseform.tzh.selectedIndex = Math.floor(val);
    document.eclipseform.tzm.selectedIndex = Math.floor(4*(val-document.eclipseform.tzh.selectedIndex)+0.5);
  }

  newloc() {
    document.eclipseform.cityndx.selectedIndex=0;
    this.clearoldresults();
  }

  settimeperiod(event) {
    var timeperiod = event.currentTarget.getAttribute('data-time-period-value')
    console.log(`value = ${timeperiod}`)

    for (var i = 0 ; i < this.loadedtimeperiods.length ; i++) {
      if (this.loadedtimeperiods[i] == timeperiod) {
        if (eval("this."+timeperiod)) {
          this.currenttimeperiod = timeperiod;
          eval("this."+timeperiod+"()");
        }
        return;
      }
    }
    this.currenttimeperiod = timeperiod;
    this.loadedtimeperiods.push(timeperiod);

    // head = document.getElementsByTagName("head")[0];
    // script = document.createElement("script");
    // script.setAttribute("language","JavaScript");
    // script.setAttribute("src",timeperiod+".js");
    // script.type = "text/javascript";
    // script.defer = false;
    // head.appendChild(script);

    this.recalculate()
  }

  recalculate() {
    eval("this."+this.currenttimeperiod+"()");
  }

  //
  // Besselian Elements for Solar Eclipses from:
  //   "Five Millennium Canon of Solar Eclipses: -1999 to +3000",
  //      Fred Espenak and Jean Meeus, NASA/TP-2006-214141, October 2006
  //
  SE2001() {
    this.calculatefor(new Array(
      // 2001  6 21
      2452082.003314,  12.0,  -4.0,   4.0,    64.2,    64.2,
        0.0103400,   0.5653861,  2.920e-05, -8.860e-06,
        -0.5718300,   0.0551256, -1.339e-04, -9.800e-07,
        23.4397697,  -0.0001830, -6.000e-06,
      359.5601501,  14.9991951,  0.000e-00,
        0.5369720,  -0.0000944, -1.210e-05,
        -0.0091200,  -0.0000939, -1.210e-05,
        0.0046005,   0.0045775,
      // 2001 12 14
      2452258.370154,  21.0,  -4.0,   4.0,    64.3,    64.3,
        0.1236540,   0.5289419,  1.500e-06, -6.980e-06,
        0.3946450,  -0.0813025,  1.455e-04,  1.210e-06,
      -23.2518005,  -0.0020550,  6.000e-06,
      136.2782745,  14.9964142,  0.000e-00,
        0.5595290,   0.0001185, -1.110e-05,
        0.0133240,   0.0001179, -1.100e-05,
        0.0047508,   0.0047272,
      // 2002  6 10
      2452436.489840,   0.0,  -4.0,   4.0,    64.3,    64.3,
        0.0938990,   0.5274543,  4.030e-05, -6.950e-06,
        0.2190200,   0.0931909, -1.594e-04, -1.360e-06,
        23.0554695,   0.0027940, -5.000e-06,
      180.1334229,  14.9992619,  0.000e-00,
        0.5516570,  -0.0001231, -1.080e-05,
        0.0054920,  -0.0001225, -1.070e-05,
        0.0046054,   0.0045824,
      // 2002 12  4
      2452612.814071,   8.0,  -4.0,   4.0,    64.4,    64.4,
        0.1861260,   0.5532500,  1.540e-05, -8.700e-06,
        -0.3544610,  -0.1309130,  1.807e-04,  2.210e-06,
      -22.2264996,  -0.0052970,  6.000e-06,
      302.4807434,  14.9972734,  0.000e-00,
        0.5441660,   0.0000834, -1.250e-05,
        -0.0019620,   0.0000830, -1.240e-05,
        0.0047437,   0.0047201,
      // 2003  5 31
      2452790.673177,   4.0,  -4.0,   4.0,    64.4,    64.4,
        -0.3238660,   0.4939013,  5.450e-05, -5.630e-06,
        0.9452060,   0.1263286, -1.691e-04, -1.580e-06,
        21.8459892,   0.0057460, -5.000e-06,
      240.6110229,  14.9997892,  0.000e-00,
        0.5643850,  -0.0000530, -9.800e-06,
        0.0181570,  -0.0000527, -9.800e-06,
        0.0046126,   0.0045896,
      // 2003 11 23
      2452967.451640,  23.0,  -4.0,   4.0,    64.5,    64.5,
        -0.1979700,   0.5568975,  5.700e-05, -9.440e-06,
        -0.9478920,  -0.1739247,  1.990e-04,  3.130e-06,
      -20.4053898,  -0.0081770,  5.000e-06,
      168.3950043,  14.9985323,  0.000e-00,
        0.5373280,  -0.0000032, -1.310e-05,
        -0.0087660,  -0.0000032, -1.300e-05,
        0.0047348,   0.0047112,
      // 2004  4 19
      2453115.066033,  14.0,  -4.0,   4.0,    64.5,    64.5,
        0.6931820,   0.4646490, -1.010e-05, -5.490e-06,
        -0.9222000,   0.2285195, -2.590e-05, -2.880e-06,
        11.4196396,   0.0137730, -3.000e-06,
        30.2473507,  15.0033541,  0.000e-00,
        0.5626270,   0.0000781, -1.020e-05,
        0.0164080,   0.0000777, -1.020e-05,
        0.0046549,   0.0046317,
      // 2004 10 14
      2453292.625266,   3.0,  -4.0,   4.0,    64.6,    64.6,
        0.4769650,   0.4894724,  1.590e-05, -7.010e-06,
        0.9183430,  -0.2563446, -6.200e-06,  3.840e-06,
        -8.2384596,  -0.0148590,  2.000e-06,
      228.4992828,  15.0035973,  0.000e-00,
        0.5482460,  -0.0001141, -1.170e-05,
        0.0020980,  -0.0001135, -1.160e-05,
        0.0046881,   0.0046648,
      // 2005  4  8
      2453469.358918,  21.0,  -4.0,   4.0,    64.7,    64.7,
        0.3502150,   0.4857762, -1.010e-05, -6.830e-06,
        -0.2074370,   0.2575757, -3.670e-05, -3.820e-06,
        7.4862900,   0.0148990, -2.000e-06,
      134.5738525,  15.0040407,  0.000e-00,
        0.5485480,   0.0001069, -1.150e-05,
        0.0023990,   0.0001064, -1.150e-05,
        0.0046686,   0.0046454,
      // 2005 10  3
      2453646.939436,  11.0,  -4.0,   4.0,    64.9,    64.9,
        0.3660300,   0.4554791,  9.900e-06, -5.450e-06,
        0.1758280,  -0.2508066,  7.500e-06,  3.170e-06,
        -4.0922399,  -0.0154900,  1.000e-06,
      347.7536011,  15.0043392,  0.000e-00,
        0.5626610,  -0.0001022, -1.040e-05,
        0.0164410,  -0.0001017, -1.030e-05,
        0.0046741,   0.0046508,
      // 2006  3 29
      2453823.925262,  10.0,  -4.0,   4.0,    65.1,    65.1,
        -0.2899370,   0.5060880,  1.810e-05, -8.270e-06,
        0.2790220,   0.2789918, -3.860e-05, -4.760e-06,
        3.3988400,   0.0155580, -1.000e-06,
      328.7933044,  15.0043669,  0.000e-00,
        0.5370020,   0.0000644, -1.270e-05,
        -0.0090900,   0.0000641, -1.270e-05,
        0.0046826,   0.0046593,
      // 2006  9 22
      2454000.986995,  12.0,  -4.0,   4.0,    65.3,    65.3,
        -0.0606680,   0.4405101,  2.800e-06, -4.830e-06,
        -0.4314620,  -0.2461280,  1.520e-05,  2.870e-06,
        0.2617900,  -0.0156210,  0.000e-00,
        1.8121800,  15.0047312,  0.000e-00,
        0.5694200,  -0.0000079, -9.700e-06,
        0.0231660,  -0.0000079, -9.700e-06,
        0.0046593,   0.0046361,
      // 2007  3 19
      2454178.606221,   3.0,  -4.0,   4.0,    65.5,    65.5,
        -0.2898930,   0.5086743,  2.180e-05, -8.460e-06,
        1.0655490,   0.2812366, -5.350e-05, -4.900e-06,
        -0.7465000,   0.0157950,  0.000e-00,
      223.0027161,  15.0042753,  0.000e-00,
        0.5362250,  -0.0000546, -1.290e-05,
        -0.0098640,  -0.0000543, -1.290e-05,
        0.0046966,   0.0046732,
      // 2007  9 11
      2454355.022505,  13.0,  -4.0,   4.0,    65.7,    65.7,
        -0.3311100,   0.4538838, -9.900e-06, -5.340e-06,
        -1.1017030,  -0.2480769,  2.780e-05,  3.080e-06,
        4.5823898,  -0.0152440, -1.000e-06,
        15.8180304,  15.0047522,  0.000e-00,
        0.5623870,   0.0000830, -1.020e-05,
        0.0161690,   0.0000826, -1.010e-05,
        0.0046449,   0.0046218,
      // 2008  2  7
      2454503.664010,   4.0,  -4.0,   4.0,    65.9,    65.9,
        0.4124440,   0.4943128, -4.200e-05, -6.600e-06,
        -0.8642530,   0.2144989,  1.395e-04, -3.020e-06,
      -15.5126305,   0.0123770,  3.000e-06,
      236.4774933,  15.0005989,  0.000e-00,
        0.5574170,  -0.0001247, -1.120e-05,
        0.0112230,  -0.0001240, -1.120e-05,
        0.0047417,   0.0047181,
      // 2008  8  1
      2454679.932087,  10.0,  -4.0,   4.0,    66.1,    66.1,
        0.1017670,   0.5285771, -6.350e-05, -8.140e-06,
        0.8506270,  -0.2025225, -1.512e-04,  3.310e-06,
        17.8675404,  -0.0101210, -4.000e-06,
      328.4257812,  15.0020123,  0.000e-00,
        0.5382320,   0.0001111, -1.200e-05,
        -0.0078660,   0.0001105, -1.200e-05,
        0.0046065,   0.0045836,
      // 2009  1 26
      2454857.833154,   8.0,  -4.0,   4.0,    66.3,    66.3,
        0.0995990,   0.4781970, -3.520e-05, -5.450e-06,
        -0.2638060,   0.1763076,  1.255e-04, -2.160e-06,
      -18.6478996,   0.0101450,  5.000e-06,
      296.8631592,  14.9990168,  0.000e-00,
        0.5719080,  -0.0000697, -1.010e-05,
        0.0256420,  -0.0000693, -1.010e-05,
        0.0047498,   0.0047262,
      // 2009  7 22
      2455034.608617,   3.0,  -4.0,   4.0,    66.5,    66.5,
        0.2399610,   0.5563955, -5.760e-05, -9.420e-06,
        -0.0032760,  -0.1774579, -1.344e-04,  3.180e-06,
        20.2642403,  -0.0078740, -5.000e-06,
      223.3882141,  15.0010042,  0.000e-00,
        0.5304270,   0.0000063, -1.280e-05,
        -0.0156330,   0.0000063, -1.270e-05,
        0.0046014,   0.0045784,
      // 2010  1 15
      2455211.796982,   7.0,  -4.0,   4.0,    66.7,    66.7,
        -0.1732700,   0.4845204, -3.710e-05, -5.380e-06,
        0.3663990,   0.1404920,  1.170e-04, -1.700e-06,
      -21.1292992,   0.0073070,  6.000e-06,
      282.6711121,  14.9975910,  0.000e-00,
        0.5746760,   0.0000372, -9.900e-06,
        0.0283960,   0.0000370, -9.900e-06,
        0.0047545,   0.0047308,
      // 2010  7 11
      2455389.315716,  20.0,  -4.0,   4.0,    66.9,    66.9,
        0.0740680,   0.5572516, -2.760e-05, -8.970e-06,
        -0.7170260,  -0.1366579, -1.121e-04,  2.360e-06,
        22.0356998,  -0.0053410, -5.000e-06,
      118.6143188,  15.0000687,  0.000e-00,
        0.5344230,  -0.0000908, -1.240e-05,
        -0.0116560,  -0.0000904, -1.230e-05,
        0.0045988,   0.0045759,
      // 2011  1  4
      2455565.869241,   9.0,  -4.0,   4.0,    67.1,    67.1,
        -0.1406310,   0.5162760, -4.180e-05, -6.510e-06,
        1.0558220,   0.1051387,  1.064e-04, -1.450e-06,
      -22.7412205,   0.0040620,  6.000e-06,
      313.8111877,  14.9966326,  0.000e-00,
        0.5635920,   0.0001098, -1.080e-05,
        0.0173670,   0.0001092, -1.070e-05,
        0.0047557,   0.0047320,
      // 2011  6  1
      2455714.387018,  21.0,  -4.0,   4.0,    67.3,    67.3,
        -0.2026590,   0.5262744,  2.970e-05, -6.620e-06,
        1.2055579,   0.0221959, -1.931e-04, -2.200e-07,
        22.0919704,   0.0055200, -5.000e-06,
      135.5376587,  14.9997454,  0.000e-00,
        0.5562140,  -0.0001026, -1.050e-05,
        0.0100270,  -0.0001021, -1.040e-05,
        0.0046112,   0.0045882,
      // 2011  7  1
      2455743.860767,   9.0,  -4.0,   4.0,    67.3,    67.3,
        -0.0593020,   0.5355113, -3.900e-06, -7.330e-06,
        -1.5020330,  -0.0881830, -8.330e-05,  1.360e-06,
        23.1209793,  -0.0025400, -6.000e-06,
      314.0531921,  14.9993591,  0.000e-00,
        0.5477690,  -0.0001272, -1.110e-05,
        0.0016240,  -0.0001266, -1.100e-05,
        0.0045990,   0.0045761,
      // 2011 11 25
      2455890.764866,   6.0,  -4.0,   4.0,    67.5,    67.5,
        -0.3100430,   0.5729063,  2.050e-05, -9.410e-06,
        -1.0276610,  -0.0578810,  2.105e-04,  8.400e-07,
      -20.6768093,  -0.0081000,  5.000e-06,
      273.2993469,  14.9983978,  0.000e-00,
        0.5406030,   0.0000822, -1.280e-05,
        -0.0055070,   0.0000818, -1.270e-05,
        0.0047360,   0.0047124,
      // 2012  5 20
      2456068.495759,   0.0,  -4.0,   4.0,    67.7,    67.7,
        -0.0022660,   0.5031828,  1.830e-05, -5.660e-06,
        0.4855240,   0.0560538, -1.411e-04, -5.600e-07,
        20.2205601,   0.0082710, -5.000e-06,
      180.8565826,  15.0005779,  0.000e-00,
        0.5664870,  -0.0000312, -9.700e-06,
        0.0202480,  -0.0000311, -9.700e-06,
        0.0046205,   0.0045974,
      // 2012 11 13
      2456245.425638,  22.0,  -4.0,   4.0,    67.9,    67.9,
        -0.1837410,   0.5743405,  3.510e-05, -9.730e-06,
        -0.3467670,  -0.0940701,  1.484e-04,  1.500e-06,
      -18.2475491,  -0.0106020,  4.000e-06,
      153.8978119,  14.9998684,  0.000e-00,
        0.5374450,  -0.0000229, -1.300e-05,
        -0.0086490,  -0.0000228, -1.300e-05,
        0.0047255,   0.0047020,
      // 2013  5 10
      2456422.518290,   0.0,  -4.0,   4.0,    68.2,    68.2,
        -0.1751800,   0.5052887,  1.440e-05, -5.910e-06,
        -0.3043010,   0.0888899, -9.590e-05, -9.700e-07,
        17.6054802,   0.0107010, -4.000e-06,
      180.9034729,  15.0016613,  0.000e-00,
        0.5636720,   0.0000788, -1.000e-05,
        0.0174470,   0.0000784, -1.000e-05,
        0.0046313,   0.0046082,
      // 2013 11  3
      2456600.033056,  13.0,  -4.0,   4.0,    68.4,    68.4,
        0.1831960,   0.5469496,  2.830e-05, -8.260e-06,
        0.2947200,  -0.1200757,  7.900e-05,  1.730e-06,
      -15.2096596,  -0.0126360,  3.000e-06,
        19.1105900,  15.0013247,  0.000e-00,
        0.5462820,  -0.0001121, -1.200e-05,
        0.0001430,  -0.0001115, -1.200e-05,
        0.0047137,   0.0046902,
      // 2014  4 29
      2456776.753158,   6.0,  -4.0,   4.0,    68.6,    68.6,
        0.1851630,   0.5282684, -5.000e-06, -7.240e-06,
        -0.9835320,   0.1221131, -4.730e-05, -1.620e-06,
        14.4497995,   0.0126580, -3.000e-06,
      270.6560059,  15.0027561,  0.000e-00,
        0.5505380,   0.0001186, -1.120e-05,
        0.0043780,   0.0001181, -1.110e-05,
        0.0046433,   0.0046202,
      // 2014 10 23
      2456954.406704,  22.0,  -4.0,   4.0,    68.9,    68.9,
        0.4025360,   0.5084859,  1.600e-05, -6.410e-06,
        1.0215790,  -0.1355327,  1.800e-05,  1.630e-06,
      -11.6185198,  -0.0141990,  2.000e-06,
      153.9307861,  15.0026512,  0.000e-00,
        0.5609970,  -0.0001108, -1.060e-05,
        0.0147850,  -0.0001103, -1.060e-05,
        0.0047006,   0.0046771,
      // 2015  3 20
      2457101.907486,  10.0,  -4.0,   4.0,    69.1,    69.1,
        -0.1682940,   0.5537415,  5.800e-06, -9.360e-06,
        0.9390570,   0.1786482, -5.410e-05, -2.930e-06,
        -0.2126600,   0.0160360,  0.000e-00,
      328.1067810,  15.0044127,  0.000e-00,
        0.5359320,   0.0000265, -1.300e-05,
        -0.0101550,   0.0000264, -1.290e-05,
        0.0046950,   0.0046717,
      // 2015  9 13
      2457278.788416,   7.0,  -4.0,   4.0,    69.3,    69.3,
        -0.2928950,   0.4821420,  1.700e-06, -5.400e-06,
        -1.0614300,  -0.1518183,  2.260e-05,  1.640e-06,
        3.8902400,  -0.0155640, -1.000e-06,
      285.9765320,  15.0048494,  0.000e-00,
        0.5682630,   0.0000258, -9.800e-06,
        0.0220150,   0.0000257, -9.700e-06,
        0.0046473,   0.0046242,
      // 2016  3  9
      2457456.582170,   2.0,  -4.0,   4.0,    69.6,    69.6,
        -0.0625250,   0.5502769,  4.700e-06, -9.060e-06,
        0.2538360,   0.1721233,  1.710e-05, -2.750e-06,
        -4.3797202,   0.0158860,  1.000e-06,
      207.3721619,  15.0039701,  0.000e-00,
        0.5388680,  -0.0000704, -1.280e-05,
        -0.0072340,  -0.0000700, -1.270e-05,
        0.0047087,   0.0046852,
      // 2016  9  1
      2457632.880579,   9.0,  -4.0,   4.0,    69.8,    69.8,
        -0.1613960,   0.5040635, -2.140e-05, -6.310e-06,
        -0.2996500,  -0.1481521, -2.580e-05,  1.780e-06,
        8.0633001,  -0.0148020, -2.000e-06,
      315.0315552,  15.0045443,  0.000e-00,
        0.5579280,   0.0001115, -1.050e-05,
        0.0117310,   0.0001110, -1.040e-05,
        0.0046339,   0.0046109,
      // 2017  2 26
      2457811.121213,  15.0,  -4.0,   4.0,    70.0,    70.0,
        0.1759410,   0.5253564, -6.200e-06, -7.420e-06,
        -0.4255600,   0.1532541,  7.920e-05, -2.080e-06,
        -8.4916401,   0.0152610,  2.000e-06,
        41.7989388,  15.0030851,  0.000e-00,
        0.5524700,  -0.0001257, -1.150e-05,
        0.0063010,  -0.0001251, -1.150e-05,
        0.0047219,   0.0046984,
      // 2017  8 21
      2457987.268521,  18.0,  -4.0,   4.0,    70.3,    70.3,
        -0.1295710,   0.5406426, -2.940e-05, -8.100e-06,
        0.4854160,  -0.1416400, -9.050e-05,  2.050e-06,
        11.8669596,  -0.0136220, -2.000e-06,
        89.2454300,  15.0039368,  0.000e-00,
        0.5420930,   0.0001241, -1.180e-05,
        -0.0040250,   0.0001234, -1.170e-05,
        0.0046222,   0.0045992,
      // 2018  2 15
      2458165.369829,  21.0,  -4.0,   4.0,    70.5,    70.5,
        0.3636200,   0.4990523, -2.120e-05, -5.930e-06,
        -1.1575490,   0.1283336,  1.268e-04, -1.440e-06,
      -12.4640398,   0.0140800,  3.000e-06,
      131.4807434,  15.0018225,  0.000e-00,
        0.5682570,  -0.0000923, -1.030e-05,
        0.0220090,  -0.0000918, -1.020e-05,
        0.0047340,   0.0047104,
      // 2018  7 13
      2458312.626576,   3.0,  -4.0,   4.0,    70.8,    70.8,
        -0.0992860,   0.5828147, -1.300e-06, -9.930e-06,
        -1.3507690,  -0.0332933, -7.700e-05,  4.700e-07,
        21.8453102,  -0.0059370, -5.000e-06,
      223.5707855,  15.0002422,  0.000e-00,
        0.5301680,  -0.0000118, -1.280e-05,
        -0.0158900,  -0.0000118, -1.270e-05,
        0.0045988,   0.0045759,
      // 2018  8 11
      2458341.907962,  10.0,  -4.0,   4.0,    70.8,    70.8,
        0.3675080,   0.5684958, -4.770e-05, -9.610e-06,
        1.0939190,  -0.1262935, -1.598e-04,  2.060e-06,
        15.2167301,  -0.0120760, -3.000e-06,
      328.6961060,  15.0030794,  0.000e-00,
        0.5316980,   0.0000338, -1.280e-05,
        -0.0143680,   0.0000336, -1.270e-05,
        0.0046127,   0.0045897,
      // 2019  1  6
      2458489.571269,   2.0,  -4.0,   4.0,    71.0,    71.0,
        0.1283730,   0.5082384, -1.620e-05, -5.810e-06,
        1.1440220,   0.0084236,  1.036e-04,  0.000e-00,
      -22.5449200,   0.0048480,  6.000e-06,
      208.6152954,  14.9967384,  0.000e-00,
        0.5727020,   0.0000575, -1.010e-05,
        0.0264320,   0.0000572, -1.000e-05,
        0.0047562,   0.0047325,
      // 2019  7  2
      2458667.308420,  19.0,  -4.0,   4.0,    71.3,    71.3,
        -0.2156340,   0.5662087,  2.740e-05, -8.790e-06,
        -0.6507080,   0.0106399, -1.272e-04, -2.700e-07,
        23.0129509,  -0.0031870, -5.000e-06,
      103.9797287,  14.9995070,  0.000e-00,
        0.5376310,  -0.0000898, -1.200e-05,
        -0.0084640,  -0.0000894, -1.200e-05,
        0.0045984,   0.0045755,
      // 2019 12 26
      2458843.721447,   5.0,  -4.0,   4.0,    71.5,    71.5,
        -0.1404130,   0.5356103, -1.500e-06, -7.150e-06,
        0.4240750,  -0.0366551,  1.458e-04,  6.100e-07,
      -23.3734703,   0.0014070,  6.000e-06,
      254.9367676,  14.9962711,  0.000e-00,
        0.5588870,   0.0001284, -1.120e-05,
        0.0126860,   0.0001277, -1.110e-05,
        0.0047548,   0.0047311,
      // 2020  6 21
      2459021.778650,   7.0,  -4.0,   4.0,    71.8,    71.8,
        0.1542590,   0.5311546,  2.590e-05, -6.940e-06,
        0.1364090,   0.0513871, -1.610e-04, -7.900e-07,
        23.4356709,  -0.0002330, -6.000e-06,
      284.5355225,  14.9991112,  0.000e-00,
        0.5523180,  -0.0001223, -1.070e-05,
        0.0061500,  -0.0001217, -1.070e-05,
        0.0046009,   0.0045780,
      // 2020 12 14
      2459198.176844,  16.0,  -4.0,   4.0,    72.1,    72.1,
        -0.1818240,   0.5633567,  2.160e-05, -8.950e-06,
        -0.2696450,  -0.0858122,  1.884e-04,  1.500e-06,
      -23.2577591,  -0.0019860,  6.000e-06,
        61.2659111,  14.9964991,  0.000e-00,
        0.5438620,   0.0000970, -1.260e-05,
        -0.0022650,   0.0000965, -1.250e-05,
        0.0047502,   0.0047266,
      // 2021  6 10
      2459375.946605,  11.0,  -4.0,   4.0,    72.3,    72.3,
        -0.0187040,   0.5012289,  3.420e-05, -5.700e-06,
        0.9261060,   0.0887765, -1.797e-04, -1.130e-06,
        23.0422802,   0.0028410, -5.000e-06,
      345.1269226,  14.9991999,  0.000e-00,
        0.5643800,  -0.0000551, -9.800e-06,
        0.0181510,  -0.0000548, -9.700e-06,
        0.0046060,   0.0045830,
      // 2021 12  4
      2459552.815716,   8.0,  -4.0,   4.0,    72.6,    72.6,
        0.0252090,   0.5683028,  3.910e-05, -9.650e-06,
        -0.9836530,  -0.1315142,  2.213e-04,  2.400e-06,
      -22.2747192,  -0.0051780,  6.000e-06,
      302.4521790,  14.9972811,  0.000e-00,
        0.5378050,  -0.0000160, -1.310e-05,
        -0.0082920,  -0.0000160, -1.310e-05,
        0.0047434,   0.0047198,
      // 2022  4 30
      2459700.362922,  21.0,  -4.0,   4.0,    72.8,    72.8,
        0.6180800,   0.4753147, -1.500e-06, -5.680e-06,
        -1.0280890,   0.2096405, -4.320e-05, -2.680e-06,
        14.9710398,   0.0121670, -3.000e-06,
      135.7055969,  15.0024672,  0.000e-00,
        0.5610730,   0.0000847, -1.030e-05,
        0.0148610,   0.0000843, -1.020e-05,
        0.0046420,   0.0046189,
      // 2022 10 25
      2459877.959259,  11.0,  -4.0,   4.0,    73.1,    73.1,
        0.4547920,   0.4955495,  2.770e-05, -7.030e-06,
        0.9687710,  -0.2395876,  1.670e-05,  3.560e-06,
      -12.1734800,  -0.0137460,  3.000e-06,
      348.9822693,  15.0024290,  0.000e-00,
        0.5498790,  -0.0001152, -1.160e-05,
        0.0037230,  -0.0001146, -1.160e-05,
        0.0047019,   0.0046785,
      // 2023  4 20
      2460054.679120,   4.0,  -4.0,   4.0,    73.4,    73.4,
        0.0268500,   0.4950182,  1.350e-05, -7.060e-06,
        -0.4273660,   0.2441992, -4.940e-05, -3.680e-06,
        11.4117899,   0.0137410, -3.000e-06,
      240.2429352,  15.0034180,  0.000e-00,
        0.5468040,   0.0001216, -1.160e-05,
        0.0006630,   0.0001210, -1.150e-05,
        0.0046550,   0.0046318,
      // 2023 10 14
      2460232.250470,  18.0,  -4.0,   4.0,    73.7,    73.7,
        0.1696580,   0.4585533,  2.780e-05, -5.430e-06,
        0.3348590,  -0.2413671,  2.400e-05,  3.030e-06,
        -8.2441902,  -0.0148880,  2.000e-06,
        93.5017319,  15.0035286,  0.000e-00,
        0.5643110,  -0.0000891, -1.030e-05,
        0.0180830,  -0.0000886, -1.030e-05,
        0.0046882,   0.0046648,
      // 2024  4  8
      2460409.262840,  18.0,  -4.0,   4.0,    74.0,    74.0,
        -0.3182440,   0.5117116,  3.260e-05, -8.420e-06,
        0.2197640,   0.2709589, -5.950e-05, -4.660e-06,
        7.5862002,   0.0148440, -2.000e-06,
        89.5912170,  15.0040817,  0.000e-00,
        0.5358140,   0.0000618, -1.280e-05,
        -0.0102720,   0.0000615, -1.270e-05,
        0.0046683,   0.0046450,
      // 2024 10  2
      2460586.282098,  19.0,  -4.0,   4.0,    74.3,    74.3,
        -0.0680480,   0.4416170,  1.360e-05, -4.830e-06,
        -0.3631700,  -0.2435630,  3.390e-05,  2.840e-06,
        -3.9872501,  -0.0155110,  1.000e-06,
      107.7310867,  15.0043297,  0.000e-00,
        0.5703490,  -0.0000002, -9.800e-06,
        0.0240910,  -0.0000002, -9.700e-06,
        0.0046734,   0.0046501,
      // 2025  3 29
      2460763.950417,  11.0,  -4.0,   4.0,    74.5,    74.5,
        -0.4028700,   0.5094122,  4.150e-05, -8.450e-06,
        0.9656950,   0.2788348, -7.230e-05, -4.840e-06,
        3.5660200,   0.0155390, -1.000e-06,
      343.8316650,  15.0043650,  0.000e-00,
        0.5357660,  -0.0000533, -1.290e-05,
        -0.0103200,  -0.0000530, -1.280e-05,
        0.0046823,   0.0046590,
      // 2025  9 21
      2460940.321576,  20.0,  -4.0,   4.0,    74.8,    74.8,
        -0.3900720,   0.4531592,  3.200e-06, -5.380e-06,
        -1.0018340,  -0.2521633,  4.560e-05,  3.150e-06,
        0.3647200,  -0.0156000,  0.000e-00,
      121.7819214,  15.0047712,  0.000e-00,
        0.5624920,   0.0000909, -1.030e-05,
        0.0162730,   0.0000905, -1.020e-05,
        0.0046583,   0.0046351,
      // 2026  2 17
      2461089.009095,  12.0,  -4.0,   4.0,    75.1,    75.1,
        0.3219540,   0.4827224, -3.140e-05, -6.370e-06,
        -0.9269710,   0.2355394,  1.169e-04, -3.270e-06,
      -11.8793001,   0.0140490,  2.000e-06,
      356.5144043,  15.0019827,  0.000e-00,
        0.5577200,  -0.0001181, -1.110e-05,
        0.0115240,  -0.0001175, -1.110e-05,
        0.0047321,   0.0047085,
      // 2026  8 12
      2461265.241039,  18.0,  -4.0,   4.0,    75.4,    75.4,
        0.4755140,   0.5189249, -7.730e-05, -8.040e-06,
        0.7711830,  -0.2301680, -1.246e-04,  3.770e-06,
        14.7966700,  -0.0120650, -3.000e-06,
        88.7477875,  15.0030899,  0.000e-00,
        0.5379550,   0.0000939, -1.210e-05,
        -0.0081420,   0.0000935, -1.210e-05,
        0.0046141,   0.0045911,
      // 2027  2  6
      2461443.167219,  16.0,  -4.0,   4.0,    75.7,    75.7,
        0.1116760,   0.4664952, -3.370e-05, -5.270e-06,
        -0.2732930,   0.2031856,  1.025e-04, -2.460e-06,
      -15.5479403,   0.0123830,  4.000e-06,
        56.4930687,  15.0005093,  0.000e-00,
        0.5719280,  -0.0000653, -1.010e-05,
        0.0256620,  -0.0000650, -1.000e-05,
        0.0047426,   0.0047190,
      // 2027  8  2
      2461619.922108,  10.0,  -4.0,   4.0,    76.0,    76.0,
        -0.0197720,   0.5447123, -4.460e-05, -9.220e-06,
        0.1600610,  -0.2111582, -1.217e-04,  3.760e-06,
        17.7624702,  -0.0101810, -4.000e-06,
      328.4225464,  15.0020962,  0.000e-00,
        0.5305960,   0.0000138, -1.280e-05,
        -0.0154640,   0.0000137, -1.280e-05,
        0.0046064,   0.0045834,
      // 2028  1 26
      2461797.131236,  15.0,  -4.0,   4.0,    76.3,    76.3,
        -0.2052830,   0.4742570, -3.900e-05, -5.270e-06,
        0.3402800,   0.1738587,  9.680e-05, -2.090e-06,
      -18.7282505,   0.0100740,  5.000e-06,
        41.8912811,  14.9989634,  0.000e-00,
        0.5741170,   0.0000420, -9.900e-06,
        0.0278400,   0.0000418, -9.900e-06,
        0.0047501,   0.0047264,
      // 2028  7 22
      2461974.622680,   3.0,  -4.0,   4.0,    76.6,    76.6,
        -0.1544090,   0.5449892, -2.140e-05, -8.690e-06,
        -0.5864240,  -0.1746085, -1.021e-04,  2.960e-06,
        20.1823101,  -0.0079740, -5.000e-06,
      223.3786774,  15.0010176,  0.000e-00,
        0.5352370,  -0.0000859, -1.230e-05,
        -0.0108460,  -0.0000854, -1.220e-05,
        0.0046016,   0.0045786,
      // 2029  1 14
      2462151.217911,  17.0,  -4.0,   4.0,    76.9,    76.9,
        -0.4074440,   0.5081525, -3.930e-05, -6.460e-06,
        0.9810550,   0.1455283,  9.210e-05, -1.990e-06,
      -21.1630096,   0.0072410,  6.000e-06,
        72.6928864,  14.9976320,  0.000e-00,
        0.5626660,   0.0001189, -1.090e-05,
        0.0164460,   0.0001183, -1.080e-05,
        0.0047541,   0.0047304,
      // 2029  6 12
      2462299.670984,   4.0,  -4.0,   4.0,    77.2,    77.2,
        -0.0107990,   0.5247606,  1.040e-05, -6.540e-06,
        1.2954130,  -0.0176365, -2.057e-04,  2.900e-07,
        23.1593208,   0.0025910, -5.000e-06,
      240.0355835,  14.9991999,  0.000e-00,
        0.5566620,  -0.0001027, -1.040e-05,
        0.0104720,  -0.0001022, -1.030e-05,
        0.0046048,   0.0045819,
      // 2029  7 11
      2462329.150914,  16.0,  -4.0,   4.0,    77.2,    77.2,
        -0.1373470,   0.5252634, -9.600e-06, -7.100e-06,
        -1.4271491,  -0.1280417, -7.690e-05,  1.890e-06,
        22.0024509,  -0.0054230, -5.000e-06,
        58.6025696,  15.0000067,  0.000e-00,
        0.5487560,  -0.0001269, -1.100e-05,
        0.0026050,  -0.0001263, -1.090e-05,
        0.0045994,   0.0045765,
      // 2029 12  5
      2462476.127754,  15.0,  -4.0,   4.0,    77.5,    77.5,
        -0.0638330,   0.5766353, -2.700e-06, -9.510e-06,
        -1.0596660,  -0.0140165,  2.295e-04,  1.100e-07,
      -22.4454498,  -0.0050540,  6.000e-06,
        47.3098488,  14.9971743,  0.000e-00,
        0.5406420,   0.0000699, -1.280e-05,
        -0.0054690,   0.0000695, -1.280e-05,
        0.0047446,   0.0047209,
      // 2030  6  1
      2462653.770288,   6.0,  -4.0,   4.0,    77.8,    77.8,
        -0.2693910,   0.5056371,  1.820e-05, -5.680e-06,
        0.5519770,   0.0210150, -1.586e-04, -1.600e-07,
        22.0613003,   0.0055810, -5.000e-06,
      270.5398254,  14.9997025,  0.000e-00,
        0.5661500,  -0.0000130, -9.700e-06,
        0.0199120,  -0.0000129, -9.700e-06,
        0.0046120,   0.0045890,
      // 2030 11 25
      2462830.785843,   7.0,  -4.0,   4.0,    78.1,    78.1,
        0.0441500,   0.5787798,  1.770e-05, -9.780e-06,
        -0.3926600,  -0.0551891,  1.744e-04,  8.300e-07,
      -20.7609997,  -0.0079890,  5.000e-06,
      288.2745972,  14.9983616,  0.000e-00,
        0.5382130,  -0.0000379, -1.300e-05,
        -0.0078850,  -0.0000377, -1.300e-05,
        0.0047361,   0.0047125,
      // 2031  5 21
      2463007.802827,   7.0,  -4.0,   4.0,    78.5,    78.5,
        -0.1147810,   0.5112392,  7.200e-06, -6.030e-06,
        -0.2112480,   0.0579330, -1.182e-04, -6.100e-07,
        20.1591492,   0.0083390, -5.000e-06,
      285.8511353,  15.0006208,  0.000e-00,
        0.5624050,   0.0000806, -1.000e-05,
        0.0161860,   0.0000802, -1.000e-05,
        0.0046208,   0.0045978,
      // 2031 11 14
      2463185.380216,  21.0,  -4.0,   4.0,    78.8,    78.8,
        -0.0198690,   0.5509440,  3.660e-05, -8.240e-06,
        0.3149710,  -0.0890652,  1.046e-04,  1.240e-06,
      -18.3368092,  -0.0105340,  4.000e-06,
      138.8939819,  14.9997644,  0.000e-00,
        0.5477740,  -0.0001068, -1.200e-05,
        0.0016280,  -0.0001063, -1.190e-05,
        0.0047260,   0.0047025,
      // 2032  5  9
      2463362.060213,  13.0,  -4.0,   4.0,    79.1,    79.1,
        -0.0743600,   0.5359546,  5.200e-06, -7.440e-06,
        -0.9654510,   0.0954058, -7.020e-05, -1.260e-06,
        17.5929108,   0.0106940, -4.000e-06,
        15.8891001,  15.0017376,  0.000e-00,
        0.5488530,   0.0001272, -1.120e-05,
        0.0027020,   0.0001266, -1.120e-05,
        0.0046310,   0.0046079,
      // 2032 11  3
      2463539.732093,   6.0,  -4.0,   4.0,    79.5,    79.5,
        0.4492390,   0.5120192,  1.700e-05, -6.390e-06,
        0.9908360,  -0.1128683,  4.520e-05,  1.330e-06,
      -15.2399197,  -0.0126330,  3.000e-06,
      274.1191101,  15.0012302,  0.000e-00,
        0.5626050,  -0.0001127, -1.060e-05,
        0.0163850,  -0.0001121, -1.060e-05,
        0.0047141,   0.0046906,
      // 2033  3 30
      2463687.251802,  18.0,  -4.0,   4.0,    79.7,    79.7,
        -0.3188510,   0.5554244,  2.270e-05, -9.420e-06,
        0.9246670,   0.1756610, -8.010e-05, -2.890e-06,
        4.0936799,   0.0157190, -1.000e-06,
        88.9280777,  15.0044537,  0.000e-00,
        0.5349430,   0.0000276, -1.290e-05,
        -0.0111390,   0.0000275, -1.290e-05,
        0.0046807,   0.0046574,
      // 2033  9 23
      2463864.079528,  14.0,  -4.0,   4.0,    80.1,    80.1,
        -0.3099960,   0.4815448,  8.700e-06, -5.410e-06,
        -1.1170050,  -0.1545441,  4.780e-05,  1.670e-06,
        -0.3398200,  -0.0158450,  0.000e-00,
        31.9424591,  15.0048037,  0.000e-00,
        0.5688970,   0.0000318, -9.800e-06,
        0.0226460,   0.0000316, -9.700e-06,
        0.0046607,   0.0046375,
      // 2034  3 20
      2464041.929689,  10.0,  -4.0,   4.0,    80.4,    80.4,
        -0.2596090,   0.5481629,  2.340e-05, -8.970e-06,
        0.2207520,   0.1755790, -8.000e-06, -2.790e-06,
        -0.0551300,   0.0160420,  0.000e-00,
      328.1391296,  15.0043993,  0.000e-00,
        0.5386310,  -0.0000665, -1.270e-05,
        -0.0074690,  -0.0000662, -1.260e-05,
        0.0046952,   0.0046718,
      // 2034  9 12
      2464218.180180,  16.0,  -4.0,   4.0,    80.7,    80.7,
        -0.2809060,   0.5028342, -1.070e-05, -6.350e-06,
        -0.3243390,  -0.1577845, -8.000e-07,  1.920e-06,
        3.9719100,  -0.0155340, -1.000e-06,
        60.9496994,  15.0049019,  0.000e-00,
        0.5578010,   0.0001188, -1.060e-05,
        0.0116050,   0.0001182, -1.050e-05,
        0.0046461,   0.0046230,
      // 2035  3  9
      2464396.462425,  23.0,  -4.0,   4.0,    81.1,    81.1,
        0.0794690,   0.5205739,  5.000e-06, -7.280e-06,
        -0.4328320,   0.1630945,  5.320e-05, -2.190e-06,
        -4.2733402,   0.0159200,  1.000e-06,
      162.3961334,  15.0039034,  0.000e-00,
        0.5526230,  -0.0001219, -1.140e-05,
        0.0064530,  -0.0001213, -1.140e-05,
        0.0047095,   0.0046861,
      // 2035  9  2
      2464572.581092,   2.0,  -4.0,   4.0,    81.4,    81.4,
        0.1342820,   0.5377735, -3.600e-05, -8.120e-06,
        0.3490090,  -0.1584651, -5.950e-05,  2.320e-06,
        8.0177097,  -0.0147830, -2.000e-06,
      210.0299835,  15.0046396,  0.000e-00,
        0.5419200,   0.0001103, -1.190e-05,
        -0.0041970,   0.0001098, -1.180e-05,
        0.0046328,   0.0046097,
      // 2036  2 27
      2464750.699178,   5.0,  -4.0,   4.0,    81.8,    81.8,
        0.4440430,   0.4934011, -2.010e-05, -5.820e-06,
        -1.1143190,   0.1445403,  9.970e-05, -1.630e-06,
        -8.4996901,   0.0152810,  2.000e-06,
      251.8083954,  15.0029964,  0.000e-00,
        0.5681920,  -0.0000906, -1.020e-05,
        0.0219450,  -0.0000901, -1.020e-05,
        0.0047231,   0.0046995,
      // 2036  7 23
      2464897.938964,  11.0,  -4.0,   4.0,    82.1,    82.1,
        0.0900160,   0.5788221, -1.800e-05, -9.850e-06,
        -1.4478140,  -0.0733682, -5.470e-05,  1.160e-06,
        19.8942108,  -0.0085370, -5.000e-06,
      343.3619080,  15.0012426,  0.000e-00,
        0.5304360,  -0.0000306, -1.280e-05,
        -0.0156240,  -0.0000304, -1.270e-05,
        0.0046019,   0.0045789,
      // 2036  8 21
      2464927.226219,  17.0,  -4.0,   4.0,    82.1,    82.1,
        0.0364460,   0.5632887, -2.800e-05, -9.550e-06,
        1.1103849,  -0.1496972, -1.354e-04,  2.460e-06,
        11.7411900,  -0.0136460, -2.000e-06,
        74.2591782,  15.0040274,  0.000e-00,
        0.5319080,   0.0000445, -1.280e-05,
        -0.0141580,   0.0000443, -1.270e-05,
        0.0046217,   0.0045987,
      // 2037  1 16
      2465074.908971,  10.0,  -4.0,   4.0,    82.4,    82.4,
        -0.0134420,   0.5071025, -2.150e-05, -5.830e-06,
        1.1514910,   0.0475625,  8.750e-05, -4.600e-07,
      -20.8301105,   0.0079690,  6.000e-06,
      327.5504456,  14.9978333,  0.000e-00,
        0.5720820,   0.0000633, -1.010e-05,
        0.0258150,   0.0000630, -1.010e-05,
        0.0047540,   0.0047303,
      // 2037  7 13
      2465252.611526,   3.0,  -4.0,   4.0,    82.8,    82.8,
        0.1415010,   0.5635997,  1.000e-07, -8.690e-06,
        -0.7337070,  -0.0318217, -1.131e-04,  4.100e-07,
        21.7824306,  -0.0060460, -5.000e-06,
      223.5501251,  15.0002251,  0.000e-00,
        0.5383830,  -0.0001101, -1.200e-05,
        -0.0077160,  -0.0001096, -1.190e-05,
        0.0045993,   0.0045764,
      // 2038  1  5
      2465429.074432,  14.0,  -4.0,   4.0,    83.2,    83.2,
        0.1089100,   0.5385408, -2.490e-05, -7.260e-06,
        0.4185440,   0.0079933,  1.379e-04, -1.000e-08,
      -22.5548096,   0.0048120,  6.000e-06,
        28.6430798,  14.9968138,  0.000e-00,
        0.5581630,   0.0001165, -1.120e-05,
        0.0119650,   0.0001159, -1.120e-05,
        0.0047554,   0.0047317,
      // 2038  7  2
      2465607.064525,  14.0,  -4.0,   4.0,    83.5,    83.5,
        0.2391940,   0.5315409,  1.000e-05, -6.880e-06,
        0.0441670,   0.0097112, -1.544e-04, -2.300e-07,
        22.9940605,  -0.0032400, -5.000e-06,
        28.9624004,  14.9994221,  0.000e-00,
        0.5531360,  -0.0001226, -1.060e-05,
        0.0069630,  -0.0001220, -1.060e-05,
        0.0045993,   0.0045764,
      // 2038 12 26
      2465783.541778,   1.0,  -4.0,   4.0,    83.9,    83.9,
        -0.0206840,   0.5698562, -2.000e-07, -9.120e-06,
        -0.2873920,  -0.0379712,  1.915e-04,  7.300e-07,
      -23.3625793,   0.0014810,  6.000e-06,
      194.9221344,  14.9963760,  0.000e-00,
        0.5435070,   0.0000867, -1.260e-05,
        -0.0026170,   0.0000863, -1.260e-05,
        0.0047537,   0.0047300,
      // 2039  6 21
      2465961.217289,  17.0,  -4.0,   4.0,    84.3,    84.3,
        -0.1896110,   0.5058693,  2.760e-05, -5.740e-06,
        0.8165930,   0.0495414, -1.800e-04, -6.700e-07,
        23.4323807,  -0.0001780, -6.000e-06,
        74.5358200,  14.9990396,  0.000e-00,
        0.5645260,  -0.0000388, -9.800e-06,
        0.0182970,  -0.0000386, -9.700e-06,
        0.0046017,   0.0045788,
      // 2039 12 15
      2466138.183170,  16.0,  -4.0,   4.0,    84.6,    84.6,
        -0.3659920,   0.5769286,  4.730e-05, -9.810e-06,
        -0.9021120,  -0.0849487,  2.295e-04,  1.600e-06,
      -23.2740498,  -0.0018620,  6.000e-06,
        61.2258987,  14.9965239,  0.000e-00,
        0.5382070,  -0.0000004, -1.310e-05,
        -0.0078920,  -0.0000004, -1.310e-05,
        0.0047499,   0.0047262,
      // 2040  5 11
      2466285.654885,   4.0,  -4.0,   4.0,    84.9,    84.9,
        0.5819860,   0.4874042,  2.100e-06, -5.890e-06,
        -1.1192850,   0.1847584, -6.000e-05, -2.400e-06,
        18.0278492,   0.0101350, -4.000e-06,
      240.9055023,  15.0014486,  0.000e-00,
        0.5595410,   0.0000889, -1.030e-05,
        0.0133370,   0.0000884, -1.030e-05,
        0.0046299,   0.0046068,
      // 2040 11  4
      2466463.297939,  19.0,  -4.0,   4.0,    85.3,    85.3,
        0.3574440,   0.5039313,  3.960e-05, -7.080e-06,
        1.0428150,  -0.2161541,  3.950e-05,  3.200e-06,
      -15.7322998,  -0.0121000,  4.000e-06,
      109.1098480,  15.0009851,  0.000e-00,
        0.5515170,  -0.0001136, -1.160e-05,
        0.0053520,  -0.0001130, -1.150e-05,
        0.0047155,   0.0046920,
      // 2041  4 30
      2466639.994685,  12.0,  -4.0,   4.0,    85.7,    85.7,
        0.2464270,   0.5066721,  1.120e-05, -7.310e-06,
        -0.3821470,   0.2242315, -7.400e-05, -3.420e-06,
        14.9744701,   0.0121280, -3.000e-06,
        0.7073700,  15.0025387,  0.000e-00,
        0.5452070,   0.0001104, -1.160e-05,
        -0.0009260,   0.0001099, -1.160e-05,
        0.0046415,   0.0046184,
      // 2041 10 25
      2466817.566918,   2.0,  -4.0,   4.0,    86.1,    86.1,
        0.3637410,   0.4645536,  3.020e-05, -5.470e-06,
        0.2827410,  -0.2258090,  4.960e-05,  2.830e-06,
      -12.1786003,  -0.0137740,  3.000e-06,
      213.9829712,  15.0023518,  0.000e-00,
        0.5658500,  -0.0000939, -1.030e-05,
        0.0196140,  -0.0000934, -1.020e-05,
        0.0047024,   0.0046790,
      // 2042  4 20
      2466994.595487,   2.0,  -4.0,   4.0,    86.5,    86.5,
        -0.2823320,   0.5204320,  4.180e-05, -8.610e-06,
        0.1904920,   0.2561881, -8.190e-05, -4.440e-06,
        11.5174398,   0.0136700, -3.000e-06,
      210.2586670,  15.0034542,  0.000e-00,
        0.5346830,   0.0000561, -1.280e-05,
        -0.0113980,   0.0000558, -1.270e-05,
        0.0046543,   0.0046311,
      // 2042 10 14
      2467171.583817,   2.0,  -4.0,   4.0,    86.8,    86.8,
        -0.1466140,   0.4458606,  2.620e-05, -4.880e-06,
        -0.2652780,  -0.2352927,  5.240e-05,  2.740e-06,
        -8.1422701,  -0.0149200,  2.000e-06,
      213.4858856,  15.0035276,  0.000e-00,
        0.5712460,   0.0000105, -9.800e-06,
        0.0249840,   0.0000104, -9.700e-06,
        0.0046878,   0.0046644,
      // 2043  4  9
      2467349.290155,  19.0,  -4.0,   4.0,    87.2,    87.2,
        -0.4477890,   0.5136000,  5.650e-05, -8.490e-06,
        0.8979040,   0.2697280, -9.270e-05, -4.670e-06,
        7.7498002,   0.0148080, -2.000e-06,
      104.6150513,  15.0040607,  0.000e-00,
        0.5353430,  -0.0000546, -1.280e-05,
        -0.0107410,  -0.0000544, -1.270e-05,
        0.0046680,   0.0046448,
      // 2043 10  3
      2467525.626261,   3.0,  -4.0,   4.0,    87.6,    87.6,
        -0.5004710,   0.4556462,  1.830e-05, -5.450e-06,
        -0.8776600,  -0.2505068,  6.280e-05,  3.160e-06,
        -3.8820000,  -0.0154980,  1.000e-06,
      227.7095795,  15.0043859,  0.000e-00,
        0.5625890,   0.0001013, -1.030e-05,
        0.0163700,   0.0001008, -1.030e-05,
        0.0046723,   0.0046490,
      // 2044  2 28
      2467674.350457,  20.0,  -4.0,   4.0,    87.9,    87.9,
        0.2697100,   0.4736216, -1.940e-05, -6.180e-06,
        -0.9830550,   0.2497132,  9.440e-05, -3.420e-06,
        -7.8625498,   0.0151700,  1.000e-06,
      116.8796387,  15.0030994,  0.000e-00,
        0.5579210,  -0.0001132, -1.100e-05,
        0.0117240,  -0.0001127, -1.100e-05,
        0.0047209,   0.0046974,
      // 2044  8 23
      2467850.553491,   1.0,  -4.0,   4.0,    88.3,    88.3,
        0.2795110,   0.5107780, -6.100e-05, -7.970e-06,
        0.9338400,  -0.2512821, -1.095e-04,  4.130e-06,
        11.2690401,  -0.0135820, -2.000e-06,
      194.3489838,  15.0040073,  0.000e-00,
        0.5376900,   0.0001028, -1.220e-05,
        -0.0084060,   0.0001023, -1.220e-05,
        0.0046232,   0.0046001,
      // 2045  2 16
      2468028.497298,   0.0,  -4.0,   4.0,    88.7,    88.7,
        0.1670940,   0.4562553, -2.940e-05, -5.120e-06,
        -0.2661640,   0.2235577,  7.840e-05, -2.680e-06,
      -11.9163704,   0.0140660,  3.000e-06,
      176.5162964,  15.0018969,  0.000e-00,
        0.5717760,  -0.0000626, -1.000e-05,
        0.0255100,  -0.0000623, -1.000e-05,
        0.0047332,   0.0047096,
      // 2045  8 12
      2468205.237952,  18.0,  -4.0,   4.0,    89.1,    89.1,
        0.2406600,   0.5332199, -5.350e-05, -9.020e-06,
        0.1240940,  -0.2388144, -9.660e-05,  4.230e-06,
        14.6739397,  -0.0121070, -3.000e-06,
        88.7604828,  15.0031691,  0.000e-00,
        0.5309430,  -0.0000029, -1.290e-05,
        -0.0151190,  -0.0000029, -1.280e-05,
        0.0046137,   0.0045908,
      // 2046  2  5
      2468382.462803,  23.0,  -4.0,   4.0,    89.5,    89.5,
        -0.1996320,   0.4641092, -3.710e-05, -5.160e-06,
        0.3238490,   0.2013055,  7.380e-05, -2.400e-06,
      -15.6472702,   0.0123280,  4.000e-06,
      161.5113525,  15.0004549,  0.000e-00,
        0.5733620,   0.0000456, -1.000e-05,
        0.0270880,   0.0000454, -9.900e-06,
        0.0047432,   0.0047195,
      // 2046  8  2
      2468559.931405,  10.0,  -4.0,   4.0,    89.9,    89.9,
        -0.3821930,   0.5318331, -1.080e-05, -8.380e-06,
        -0.4252990,  -0.2069787, -8.980e-05,  3.450e-06,
        17.6556797,  -0.0102710, -4.000e-06,
      328.4159546,  15.0021124,  0.000e-00,
        0.5362110,  -0.0000798, -1.220e-05,
        -0.0098770,  -0.0000794, -1.220e-05,
        0.0046066,   0.0045836,
      // 2047  1 26
      2468736.564789,   2.0,  -4.0,   4.0,    90.4,    90.4,
        -0.1348220,   0.4984687, -5.200e-05, -6.360e-06,
        1.0627940,   0.1810904,  6.610e-05, -2.460e-06,
      -18.7676697,   0.0100180,  5.000e-06,
      206.9157867,  14.9990025,  0.000e-00,
        0.5616840,   0.0001052, -1.090e-05,
        0.0154690,   0.0001047, -1.090e-05,
        0.0047498,   0.0047261,
      // 2047  6 23
      2468884.953132,  11.0,  -4.0,   4.0,    90.7,    90.7,
        0.2188800,   0.5200847, -1.130e-05, -6.420e-06,
        1.3606890,  -0.0585821, -2.098e-04,  8.100e-07,
        23.4161701,  -0.0004460, -5.000e-06,
      344.4290771,  14.9990950,  0.000e-00,
        0.5572320,  -0.0001034, -1.030e-05,
        0.0110390,  -0.0001029, -1.030e-05,
        0.0046010,   0.0045780,
      // 2047  7 22
      2468914.441868,  23.0,  -4.0,   4.0,    90.8,    90.8,
        -0.2068330,   0.5130761, -1.180e-05, -6.840e-06,
        -1.3486100,  -0.1637312, -6.500e-05,  2.350e-06,
        20.1315403,  -0.0080560, -5.000e-06,
      163.3602753,  15.0009661,  0.000e-00,
        0.5498730,  -0.0001259, -1.090e-05,
        0.0037170,  -0.0001253, -1.090e-05,
        0.0046020,   0.0045791,
      // 2047 12 16
      2469061.493197,   0.0,  -4.0,   4.0,    91.1,    91.1,
        0.1560940,   0.5767430, -2.800e-05, -9.550e-06,
        -1.0587690,   0.0336400,  2.379e-04, -7.000e-07,
      -23.3340092,  -0.0017000,  6.000e-06,
      181.0641174,  14.9964705,  0.000e-00,
        0.5405670,   0.0000589, -1.290e-05,
        -0.0055430,   0.0000586, -1.280e-05,
        0.0047506,   0.0047269,
      // 2048  6 11
      2469239.040889,  13.0,  -4.0,   4.0,    91.5,    91.5,
        0.0316460,   0.5056343, -3.900e-06, -5.670e-06,
        0.6461380,  -0.0173728, -1.706e-04,  2.800e-07,
        23.1448994,   0.0026510, -5.000e-06,
        15.0336304,  14.9991531,  0.000e-00,
        0.5658730,  -0.0000158, -9.700e-06,
        0.0196370,  -0.0000157, -9.600e-06,
        0.0046056,   0.0045827,
      // 2048 12  5
      2469416.149615,  16.0,  -4.0,   4.0,    92.0,    92.0,
        0.2301980,   0.5806540, -2.400e-06, -9.780e-06,
        -0.4016280,  -0.0107019,  1.924e-04,  7.000e-08,
      -22.4957504,  -0.0049310,  6.000e-06,
        62.2796288,  14.9971514,  0.000e-00,
        0.5389000,  -0.0000506, -1.300e-05,
        -0.0072020,  -0.0000503, -1.300e-05,
        0.0047445,   0.0047209,
      // 2049  5 31
      2469593.083318,  14.0,  -4.0,   4.0,    92.4,    92.4,
        0.0052950,   0.5155675, -5.900e-06, -6.120e-06,
        -0.1185870,   0.0222167, -1.363e-04, -1.800e-07,
        22.0243092,   0.0056490, -5.000e-06,
        30.5461807,  14.9997396,  0.000e-00,
        0.5612270,   0.0000805, -1.010e-05,
        0.0150140,   0.0000801, -1.000e-05,
        0.0046123,   0.0045894,
      // 2049 11 25
      2469770.731804,   6.0,  -4.0,   4.0,    92.8,    92.8,
        0.2691420,   0.5538807,  1.810e-05, -8.210e-06,
        0.2705230,  -0.0514278,  1.298e-04,  6.700e-07,
      -20.8280296,  -0.0079010,  5.000e-06,
      273.2543640,  14.9982624,  0.000e-00,
        0.5490580,  -0.0001228, -1.190e-05,
        0.0029050,  -0.0001222, -1.190e-05,
        0.0047363,   0.0047128,
      // 2050  5 20
      2469947.363081,  21.0,  -4.0,   4.0,    93.7,    93.7,
        0.2547040,   0.5429641, -1.300e-05, -7.610e-06,
        -0.8452020,   0.0624711, -9.460e-05, -8.000e-07,
        20.1550102,   0.0083320, -5.000e-06,
      135.8493500,  15.0006962,  0.000e-00,
        0.5474100,   0.0001108, -1.130e-05,
        0.0012660,   0.0001103, -1.120e-05,
        0.0046207,   0.0045976,
      // 2050 11 14
      2470125.063111,  14.0,  -4.0,   4.0,    94.7,    94.7,
        0.4177200,   0.5157342,  1.710e-05, -6.380e-06,
        0.9905580,  -0.0836620,  7.030e-05,  9.500e-07,
      -18.3629894,  -0.0105200,  4.000e-06,
        33.8933182,  14.9996700,  0.000e-00,
        0.5641130,  -0.0001116, -1.060e-05,
        0.0178850,  -0.0001110, -1.050e-05,
        0.0047262,   0.0047027,
      // 2051  4 11
      2470272.590725,   2.0,  -4.0,   4.0,    95.5,    95.5,
        -0.3875880,   0.5591959,  3.430e-05, -9.510e-06,
        0.9458510,   0.1654097, -1.076e-04, -2.720e-06,
        8.2485504,   0.0149310, -2.000e-06,
      209.7067413,  15.0041018,  0.000e-00,
        0.5339960,   0.0000253, -1.290e-05,
        -0.0120820,   0.0000252, -1.290e-05,
        0.0046664,   0.0046432,
      // 2051 10  4
      2470449.376557,  21.0,  -4.0,   4.0,    96.5,    96.5,
        -0.3792710,   0.4829725,  1.740e-05, -5.440e-06,
        -1.1485270,  -0.1511637,  7.250e-05,  1.640e-06,
        -4.5814500,  -0.0156690,  1.000e-06,
      137.8466339,  15.0043459,  0.000e-00,
        0.5695300,   0.0000403, -9.800e-06,
        0.0232750,   0.0000401, -9.800e-06,
        0.0046749,   0.0046516,
      // 2052  3 30
      2470627.272139,  19.0,  -4.0,   4.0,    97.5,    97.5,
        0.1601670,   0.5483147,  1.180e-05, -8.930e-06,
        0.3895200,   0.1717027, -4.230e-05, -2.720e-06,
        4.2638202,   0.0157070, -1.000e-06,
      103.9639893,  15.0044222,  0.000e-00,
        0.5382980,  -0.0000908, -1.260e-05,
        -0.0078010,  -0.0000903, -1.250e-05,
        0.0046807,   0.0046574,
      // 2052  9 22
      2470803.485529,   0.0,  -4.0,   4.0,    98.5,    98.5,
        0.0383110,   0.5034739, -1.570e-05, -6.410e-06,
        -0.4826770,  -0.1610953,  2.920e-05,  1.970e-06,
        -0.2699100,  -0.0158250,  0.000e-00,
      181.9254761,  15.0048628,  0.000e-00,
        0.5578440,   0.0001075, -1.060e-05,
        0.0116490,   0.0001069, -1.060e-05,
        0.0046598,   0.0046366,
      // 2053  3 20
      2470981.797447,   7.0,  -4.0,   4.0,    99.5,    99.5,
        0.0529120,   0.5178724,  1.410e-05, -7.170e-06,
        -0.4124580,   0.1658834,  2.660e-05, -2.210e-06,
        0.0535300,   0.0160630,  0.000e-00,
      283.1618958,  15.0043287,  0.000e-00,
        0.5526820,  -0.0001213, -1.130e-05,
        0.0065110,  -0.0001207, -1.130e-05,
        0.0046956,   0.0046722,
      // 2053  9 12
      2471157.898714,  10.0,  -4.0,   4.0,   100.4,   100.4,
        0.3252420,   0.5364330, -3.750e-05, -8.170e-06,
        0.2268900,  -0.1685794, -2.910e-05,  2.490e-06,
        3.9131899,  -0.0155120, -1.000e-06,
      330.9635620,  15.0049877,  0.000e-00,
        0.5418640,   0.0000990, -1.200e-05,
        -0.0042520,   0.0000985, -1.190e-05,
        0.0046454,   0.0046223,
      // 2054  3  9
      2471336.023385,  13.0,  -4.0,   4.0,   101.4,   101.4,
        0.5660050,   0.4894181, -1.830e-05, -5.740e-06,
        -1.0496600,   0.1539509,  7.230e-05, -1.730e-06,
        -4.2806101,   0.0159410,  1.000e-06,
        12.4006500,  15.0038223,  0.000e-00,
        0.5679900,  -0.0000910, -1.020e-05,
        0.0217430,  -0.0000906, -1.010e-05,
        0.0047104,   0.0046870,
      // 2054  8  3
      2471483.252802,  18.0,  -4.0,   4.0,   102.3,   102.3,
        -0.3149630,   0.5729670, -3.000e-07, -9.720e-06,
        -1.4610890,  -0.1078622, -3.210e-05,  1.750e-06,
        17.2901306,  -0.0107780, -4.000e-06,
        88.4422989,  15.0023603,  0.000e-00,
        0.5308940,  -0.0000228, -1.280e-05,
        -0.0151680,  -0.0000227, -1.270e-05,
        0.0046071,   0.0045842,
      // 2054  9  2
      2471512.548306,   1.0,  -4.0,   4.0,   102.4,   102.4,
        0.2025860,   0.5589372, -3.060e-05, -9.500e-06,
        1.0054950,  -0.1664793, -1.046e-04,  2.750e-06,
        7.8829098,  -0.0147930, -2.000e-06,
      195.0523834,  15.0047131,  0.000e-00,
        0.5322890,   0.0000319, -1.280e-05,
        -0.0137800,   0.0000317, -1.280e-05,
        0.0046325,   0.0046094,
      // 2055  1 27
      2471660.245894,  18.0,  -4.0,   4.0,   103.3,   103.3,
        -0.1358290,   0.5038430, -2.320e-05, -5.830e-06,
        1.1480550,   0.0819903,  6.610e-05, -8.700e-07,
      -18.3236904,   0.0106620,  5.000e-06,
        86.8260269,  14.9992504,  0.000e-00,
        0.5712790,   0.0000687, -1.010e-05,
        0.0250160,   0.0000684, -1.010e-05,
        0.0047494,   0.0047258,
      // 2055  7 24
      2471837.915165,  10.0,  -4.0,   4.0,   104.3,   104.3,
        -0.0794850,   0.5582302,  2.800e-06, -8.520e-06,
        -0.7974950,  -0.0699515, -9.360e-05,  9.900e-07,
        19.8136196,  -0.0086280, -5.000e-06,
      328.3484497,  15.0012331,  0.000e-00,
        0.5393710,  -0.0001059, -1.190e-05,
        -0.0067330,  -0.0001054, -1.180e-05,
        0.0046021,   0.0045792,
      // 2056  1 16
      2472014.428300,  22.0,  -4.0,   4.0,   105.3,   105.3,
        -0.1887860,   0.5381457, -2.320e-05, -7.340e-06,
        0.4043190,   0.0495231,  1.215e-04, -5.800e-07,
      -20.8480492,   0.0079340,  5.000e-06,
      147.5691071,  14.9978962,  0.000e-00,
        0.5571810,   0.0001273, -1.130e-05,
        0.0109880,   0.0001267, -1.130e-05,
        0.0047537,   0.0047300,
      // 2056  7 12
      2472192.348603,  20.0,  -4.0,   4.0,   106.3,   106.3,
        -0.1961730,   0.5287811,  1.560e-05, -6.760e-06,
        -0.0317070,  -0.0295030, -1.410e-04,  2.900e-07,
        21.7613506,  -0.0060810, -5.000e-06,
      118.5337677,  15.0001507,  0.000e-00,
        0.5541680,  -0.0001023, -1.060e-05,
        0.0079910,  -0.0001018, -1.050e-05,
        0.0045997,   0.0045768,
      // 2057  1  5
      2472368.908242,  10.0,  -4.0,   4.0,   107.3,   107.3,
        0.1203380,   0.5722664, -2.090e-05, -9.220e-06,
        -0.2817710,   0.0094214,  1.831e-04, -5.000e-08,
      -22.5254707,   0.0048760,  6.000e-06,
      328.6306763,  14.9969177,  0.000e-00,
        0.5430430,   0.0000770, -1.270e-05,
        -0.0030790,   0.0000767, -1.260e-05,
        0.0047548,   0.0047312,
      // 2057  7  1
      2472546.486288,   0.0,  -4.0,   4.0,   108.3,   108.3,
        0.1524000,   0.5075187,  3.000e-06, -5.750e-06,
        0.7486310,   0.0098353, -1.746e-04, -2.000e-07,
        23.0035706,  -0.0031920, -5.000e-06,
      178.9594727,  14.9993534,  0.000e-00,
        0.5647210,  -0.0000425, -9.700e-06,
        0.0184910,  -0.0000423, -9.700e-06,
        0.0045998,   0.0045769,
      // 2057 12 26
      2472723.551796,   1.0,  -4.0,   4.0,   109.3,   109.3,
        -0.1991570,   0.5818050,  2.410e-05, -9.900e-06,
        -0.9300200,  -0.0358838,  2.335e-04,  7.500e-07,
      -23.3452702,   0.0016020,  6.000e-06,
      194.8842316,  14.9964199,  0.000e-00,
        0.5384860,  -0.0000103, -1.310e-05,
        -0.0076130,  -0.0000103, -1.310e-05,
        0.0047534,   0.0047298,
      // 2058  5 22
      2472870.944045,  11.0,  -4.0,   4.0,   110.2,   110.2,
        0.5602860,   0.4998260,  1.100e-06, -6.120e-06,
        -1.2079110,   0.1541209, -7.490e-05, -2.040e-06,
        20.4837303,   0.0077170, -5.000e-06,
      345.8144226,  15.0004349,  0.000e-00,
        0.5581110,   0.0000915, -1.040e-05,
        0.0119140,   0.0000910, -1.030e-05,
        0.0046198,   0.0045968,
      // 2058  6 21
      2472900.513595,   0.0,  -4.0,   4.0,   110.3,   110.3,
        -0.3112220,   0.5095857,  1.690e-05, -5.910e-06,
        1.4635490,   0.0500507, -2.078e-04, -6.700e-07,
        23.4287109,  -0.0000940, -5.000e-06,
      179.5388336,  14.9990454,  0.000e-00,
        0.5627170,   0.0000702, -9.900e-06,
        0.0164970,   0.0000699, -9.800e-06,
        0.0046020,   0.0045790,
      // 2058 11 16
      2473048.641057,   3.0,  -4.0,   4.0,   111.2,   111.2,
        0.1842850,   0.5135990,  5.040e-05, -7.150e-06,
        1.1269920,  -0.1860804,  6.140e-05,  2.740e-06,
      -18.7681904,  -0.0099080,  5.000e-06,
      228.8282166,  14.9994373,  0.000e-00,
        0.5530640,  -0.0001094, -1.150e-05,
        0.0068920,  -0.0001088, -1.140e-05,
        0.0047273,   0.0047038,
      // 2059  5 11
      2473225.307125,  19.0,  -4.0,   4.0,   112.2,   112.2,
        -0.0121490,   0.5197702,  2.580e-05, -7.610e-06,
        -0.5481360,   0.1978978, -8.800e-05, -3.070e-06,
        18.0331402,   0.0100980, -4.000e-06,
      105.8946686,  15.0015173,  0.000e-00,
        0.5436040,   0.0001205, -1.170e-05,
        -0.0025210,   0.0001199, -1.160e-05,
        0.0046298,   0.0046067,
      // 2059 11  5
      2473402.887669,   9.0,  -4.0,   4.0,   113.2,   113.2,
        0.0328080,   0.4727287,  4.820e-05, -5.520e-06,
        0.4710080,  -0.2041372,  6.680e-05,  2.550e-06,
      -15.7218599,  -0.0121290,  4.000e-06,
      319.1158752,  15.0009193,  0.000e-00,
        0.5673890,  -0.0000760, -1.020e-05,
        0.0211460,  -0.0000756, -1.020e-05,
        0.0047156,   0.0046921,
      // 2060  4 30
      2473579.923609,  10.0,  -4.0,   4.0,   114.2,   114.2,
        -0.1863300,   0.5315517,  4.500e-05, -8.850e-06,
        0.1824710,   0.2346059, -1.054e-04, -4.100e-06,
        15.0687704,   0.0120490, -3.000e-06,
      330.7116394,  15.0025644,  0.000e-00,
        0.5336410,   0.0000474, -1.280e-05,
        -0.0124340,   0.0000472, -1.270e-05,
        0.0046411,   0.0046180,
      // 2060 10 24
      2473756.891786,   9.0,  -4.0,   4.0,   115.2,   115.2,
        -0.2976080,   0.4529502,  3.950e-05, -4.970e-06,
        -0.1468380,  -0.2211077,  7.100e-05,  2.590e-06,
      -12.0683804,  -0.0138210,  2.000e-06,
      318.9766541,  15.0023689,  0.000e-00,
        0.5720700,   0.0000238, -9.800e-06,
        0.0258030,   0.0000237, -9.800e-06,
        0.0047018,   0.0046784,
      // 2061  4 20
      2473934.622790,   3.0,  -4.0,   4.0,   116.3,   116.3,
        -0.3921720,   0.5207760,  6.430e-05, -8.580e-06,
        0.8743230,   0.2539409, -1.155e-04, -4.390e-06,
        11.6652699,   0.0136180, -2.000e-06,
      225.2817993,  15.0034170,  0.000e-00,
        0.5349730,  -0.0000602, -1.270e-05,
        -0.0111090,  -0.0000599, -1.270e-05,
        0.0046541,   0.0046309,
      // 2061 10 13
      2474110.939001,  11.0,  -4.0,   4.0,   117.3,   117.3,
        -0.2349130,   0.4613687,  1.940e-05, -5.560e-06,
        -0.9656460,  -0.2427510,  8.880e-05,  3.090e-06,
        -8.0558500,  -0.0149150,  1.000e-06,
      348.4722595,  15.0035944,  0.000e-00,
        0.5627730,   0.0000946, -1.040e-05,
        0.0165530,   0.0000941, -1.040e-05,
        0.0046866,   0.0046633,
      // 2062  3 11
      2474259.684910,   4.0,  -4.0,   4.0,   118.1,   118.1,
        0.2888250,   0.4676399, -8.500e-06, -6.040e-06,
        -1.0096170,   0.2572620,  7.160e-05, -3.490e-06,
        -3.6205699,   0.0157510,  0.000e-00,
      237.5128937,  15.0038614,  0.000e-00,
        0.5580080,  -0.0001117, -1.090e-05,
        0.0118120,  -0.0001111, -1.090e-05,
        0.0047081,   0.0046846,
      // 2062  9  3
      2474435.871150,   9.0,  -4.0,   4.0,   119.2,   119.2,
        0.5221090,   0.5047477, -6.230e-05, -7.930e-06,
        0.8768370,  -0.2662545, -8.360e-05,  4.400e-06,
        7.3710098,  -0.0146760, -2.000e-06,
      315.1636047,  15.0046482,  0.000e-00,
        0.5376540,   0.0000900, -1.230e-05,
        -0.0084420,   0.0000896, -1.220e-05,
        0.0046342,   0.0046112,
      // 2063  2 28
      2474613.821875,   8.0,  -4.0,   4.0,   120.2,   120.2,
        0.2805680,   0.4484310, -2.420e-05, -5.010e-06,
        -0.2316680,   0.2374827,  5.370e-05, -2.820e-06,
        -7.9068398,   0.0151910,  2.000e-06,
      296.8877258,  15.0030212,  0.000e-00,
        0.5714640,  -0.0000622, -1.000e-05,
        0.0252000,  -0.0000619, -9.900e-06,
        0.0047219,   0.0046984,
      // 2063  8 24
      2474790.557067,   1.0,  -4.0,   4.0,   121.2,   121.2,
        -0.0701750,   0.5232786, -2.950e-05, -8.830e-06,
        0.3442290,  -0.2596770, -8.470e-05,  4.580e-06,
        11.1307802,  -0.0136090, -2.000e-06,
      194.3682251,  15.0040712,  0.000e-00,
        0.5314380,   0.0000081, -1.290e-05,
        -0.0146270,   0.0000081, -1.280e-05,
        0.0046230,   0.0046000,
      // 2064  2 17
      2474967.791937,   7.0,  -4.0,   4.0,   122.2,   122.2,
        -0.1608290,   0.4553403, -3.210e-05, -5.070e-06,
        0.3217130,   0.2224596,  4.960e-05, -2.650e-06,
      -12.0279598,   0.0140260,  3.000e-06,
      281.5187988,  15.0018520,  0.000e-00,
        0.5724160,   0.0000480, -1.000e-05,
        0.0261470,   0.0000477, -9.900e-06,
        0.0047338,   0.0047102,
      // 2064  8 12
      2475145.240350,  18.0,  -4.0,   4.0,   123.3,   123.3,
        -0.0703770,   0.5190735, -2.130e-05, -8.110e-06,
        -0.4783750,  -0.2331515, -6.510e-05,  3.830e-06,
        14.5501604,  -0.0121830, -3.000e-06,
        88.7720795,  15.0031767,  0.000e-00,
        0.5372660,  -0.0000978, -1.220e-05,
        -0.0088270,  -0.0000973, -1.210e-05,
        0.0046141,   0.0045911,
      // 2065  2  5
      2475321.911406,  10.0,  -4.0,   4.0,   124.3,   124.3,
        -0.3469480,   0.4888483, -4.070e-05, -6.290e-06,
        0.9759190,   0.2104490,  4.430e-05, -2.870e-06,
      -15.6926298,   0.0122760,  4.000e-06,
      326.5192261,  15.0004959,  0.000e-00,
        0.5604180,   0.0001129, -1.100e-05,
        0.0142090,   0.0001123, -1.090e-05,
        0.0047428,   0.0047192,
      // 2065  7  3
      2475470.231858,  18.0,  -4.0,   4.0,   125.2,   125.2,
        0.4985220,   0.5123128, -3.360e-05, -6.260e-06,
        1.3928410,  -0.0984754, -2.050e-04,  1.300e-06,
        22.8524704,  -0.0034410, -5.000e-06,
        88.8741226,  14.9994602,  0.000e-00,
        0.5579140,  -0.0001054, -1.020e-05,
        0.0117180,  -0.0001049, -1.020e-05,
        0.0045994,   0.0045765,
      // 2065  8  2
      2475499.732137,   6.0,  -4.0,   4.0,   125.3,   125.3,
        -0.2468800,   0.5001704, -1.090e-05, -6.580e-06,
        -1.2727040,  -0.1940160, -4.950e-05,  2.730e-06,
        17.5938206,  -0.0103480, -4.000e-06,
      268.4149780,  15.0020580,  0.000e-00,
        0.5511380,  -0.0001249, -1.090e-05,
        0.0049760,  -0.0001243, -1.080e-05,
        0.0046073,   0.0045844,
      // 2065 12 27
      2475646.861062,   9.0,  -4.0,   4.0,   126.2,   126.2,
        0.3435420,   0.5726684, -5.220e-05, -9.510e-06,
        -1.0303880,   0.0824268,  2.344e-04, -1.530e-06,
      -23.2857609,   0.0017680,  6.000e-06,
      314.7131348,  14.9964275,  0.000e-00,
        0.5403750,   0.0000492, -1.290e-05,
        -0.0057340,   0.0000490, -1.290e-05,
        0.0047539,   0.0047302,
      // 2066  6 22
      2475824.309579,  19.0,  -4.0,   4.0,   127.2,   127.2,
        -0.1337050,   0.5026581, -1.130e-05, -5.630e-06,
        0.7527330,  -0.0567091, -1.761e-04,  7.400e-07,
        23.4181900,  -0.0003760, -6.000e-06,
      104.4336777,  14.9990444,  0.000e-00,
        0.5656990,   0.0000000, -9.700e-06,
        0.0194640,   0.0000000, -9.600e-06,
        0.0046015,   0.0045786,
      // 2066 12 17
      2476001.516434,   0.0,  -4.0,   4.0,   128.3,   128.3,
        -0.2025020,   0.5788601,  5.400e-06, -9.700e-06,
        -0.4180310,   0.0368779,  2.023e-04, -7.400e-07,
      -23.3472805,  -0.0015820,  6.000e-06,
      181.0241394,  14.9964638,  0.000e-00,
        0.5395420,  -0.0000352, -1.300e-05,
        -0.0065630,  -0.0000351, -1.290e-05,
        0.0047506,   0.0047270,
      // 2067  6 11
      2476178.362806,  21.0,  -4.0,   4.0,   129.3,   129.3,
        0.1501530,   0.5173607, -2.270e-05, -6.190e-06,
        -0.0435910,  -0.0169653, -1.475e-04,  3.000e-07,
        23.1277294,   0.0027210, -6.000e-06,
      135.0309753,  14.9991903,  0.000e-00,
        0.5601230,   0.0000796, -1.010e-05,
        0.0139160,   0.0000792, -1.010e-05,
        0.0046056,   0.0045827,
      // 2067 12  6
      2476356.085917,  14.0,  -4.0,   4.0,   130.3,   130.3,
        -0.0297800,   0.5543402,  2.100e-05, -8.130e-06,
        0.2849880,  -0.0089701,  1.467e-04,  3.000e-08,
      -22.5307198,  -0.0048410,  6.000e-06,
        32.2557182,  14.9970589,  0.000e-00,
        0.5503850,  -0.0001132, -1.190e-05,
        0.0042260,  -0.0001127, -1.180e-05,
        0.0047450,   0.0047214,
      // 2068  5 31
      2476532.664341,   4.0,  -4.0,   4.0,   131.4,   131.4,
        0.0661770,   0.5481974, -1.340e-05, -7.770e-06,
        -0.7948840,   0.0244838, -1.118e-04, -2.700e-07,
        22.0227795,   0.0056440, -5.000e-06,
      240.5324554,  14.9998236,  0.000e-00,
        0.5459420,   0.0001158, -1.130e-05,
        -0.0001950,   0.0001152, -1.130e-05,
        0.0046118,   0.0045888,
      // 2068 11 24
      2476710.397565,  22.0,  -4.0,   4.0,   132.4,   132.4,
        0.3338340,   0.5184666,  1.460e-05, -6.350e-06,
        1.0031260,  -0.0485309,  9.190e-05,  5.000e-07,
      -20.8382797,  -0.0078910,  5.000e-06,
      153.2581024,  14.9981670,  0.000e-00,
        0.5655150,  -0.0001086, -1.050e-05,
        0.0192810,  -0.0001081, -1.050e-05,
        0.0047369,   0.0047133,
      // 2069  4 21
      2476857.924409,  10.0,  -4.0,   4.0,   133.3,   133.3,
        -0.3740920,   0.5646012,  3.940e-05, -9.620e-06,
        1.0002630,   0.1479326, -1.366e-04, -2.430e-06,
        12.1261301,   0.0136850, -3.000e-06,
      330.3412170,  15.0034170,  0.000e-00,
        0.5331120,   0.0000197, -1.290e-05,
        -0.0129610,   0.0000196, -1.290e-05,
        0.0046525,   0.0046294,
      // 2069  5 20
      2476887.245344,  18.0,  -4.0,   4.0,   133.5,   133.5,
        0.2365860,   0.5732387, -5.700e-06, -9.440e-06,
        -1.4676510,   0.0670343, -5.930e-05, -1.030e-06,
        20.2118607,   0.0082530, -5.000e-06,
        90.8329620,  15.0007439,  0.000e-00,
        0.5339670,   0.0000609, -1.260e-05,
        -0.0121100,   0.0000606, -1.250e-05,
        0.0046201,   0.0045971,
      // 2069 10 15
      2477034.680513,   4.0,  -4.0,   4.0,   134.3,   134.3,
        -0.5114230,   0.4863245,  2.730e-05, -5.490e-06,
        -1.1555420,  -0.1415344,  9.710e-05,  1.530e-06,
        -8.7106800,  -0.0150100,  2.000e-06,
      243.5715027,  15.0034904,  0.000e-00,
        0.5701150,   0.0000517, -9.900e-06,
        0.0238580,   0.0000515, -9.800e-06,
        0.0046891,   0.0046657,
      // 2070  4 11
      2477212.608442,   3.0,  -4.0,   4.0,   135.4,   135.4,
        0.1163410,   0.5504562,  2.160e-05, -8.910e-06,
        0.4144710,   0.1607142, -6.960e-05, -2.520e-06,
        8.4101896,   0.0149030, -2.000e-06,
      224.7370605,  15.0040483,  0.000e-00,
        0.5380870,  -0.0000932, -1.250e-05,
        -0.0080110,  -0.0000928, -1.240e-05,
        0.0046667,   0.0046434,
      // 2070 10  4
      2477388.797880,   7.0,  -4.0,   4.0,   136.4,   136.4,
        -0.2229640,   0.5061899,  1.500e-06, -6.510e-06,
        -0.4489110,  -0.1580217,  5.260e-05,  1.950e-06,
        -4.5125499,  -0.0156540,  1.000e-06,
      287.8297424,  15.0044222,  0.000e-00,
        0.5577610,   0.0001205, -1.070e-05,
        0.0115660,   0.0001199, -1.070e-05,
        0.0046735,   0.0046503,
      // 2071  3 31
      2477567.125768,  15.0,  -4.0,   4.0,   137.5,   137.5,
        0.1020970,   0.5173237,  1.990e-05, -7.090e-06,
        -0.3598650,   0.1618197, -9.000e-07, -2.140e-06,
        4.3524499,   0.0157210, -1.000e-06,
        43.9860497,  15.0043316,  0.000e-00,
        0.5527340,  -0.0001238, -1.120e-05,
        0.0065640,  -0.0001232, -1.120e-05,
        0.0046816,   0.0046583,
      // 2071  9 23
      2477743.222546,  17.0,  -4.0,   4.0,   138.5,   138.5,
        -0.1033420,   0.5370933, -9.600e-06, -8.270e-06,
        0.3081730,  -0.1718954, -7.500e-06,  2.570e-06,
        -0.3142000,  -0.0157940,  0.000e-00,
        76.9318466,  15.0049524,  0.000e-00,
        0.5417530,   0.0001150, -1.210e-05,
        -0.0043630,   0.0001144, -1.200e-05,
        0.0046586,   0.0046354,
      // 2072  3 19
      2477921.340637,  20.0,  -4.0,   4.0,   139.6,   139.6,
        0.2634960,   0.4874922, -7.000e-07, -5.680e-06,
        -1.1132621,   0.1566515,  4.980e-05, -1.750e-06,
        0.0293400,   0.0160870,  0.000e-00,
      118.1625900,  15.0042458,  0.000e-00,
        0.5677630,  -0.0000742, -1.010e-05,
        0.0215180,  -0.0000738, -1.000e-05,
        0.0046968,   0.0046734,
      // 2072  9 12
      2478097.874540,   9.0,  -4.0,   4.0,   140.7,   140.7,
        0.2977720,   0.5561905, -2.750e-05, -9.460e-06,
        0.9184830,  -0.1762264, -7.460e-05,  2.920e-06,
        3.7728400,  -0.0155060, -1.000e-06,
      315.9901733,  15.0050478,  0.000e-00,
        0.5327970,   0.0000217, -1.290e-05,
        -0.0132750,   0.0000216, -1.280e-05,
        0.0046450,   0.0046218,
      // 2073  2  7
      2478245.580544,   2.0,  -4.0,   4.0,   141.5,   141.5,
        -0.2180770,   0.4996668, -2.170e-05, -5.820e-06,
        1.1449831,   0.1104868,  4.150e-05, -1.210e-06,
      -15.1565599,   0.0128320,  4.000e-06,
      206.5017548,  15.0007563,  0.000e-00,
        0.5702670,   0.0000729, -1.020e-05,
        0.0240090,   0.0000726, -1.010e-05,
        0.0047419,   0.0047183,
      // 2073  8  3
      2478423.219015,  17.0,  -4.0,   4.0,   142.6,   142.6,
        -0.3017180,   0.5511557,  9.300e-06, -8.320e-06,
        -0.8351410,  -0.1026030, -7.130e-05,  1.480e-06,
        17.1899395,  -0.0108610, -4.000e-06,
        73.4422836,  15.0023413,  0.000e-00,
        0.5405440,  -0.0001013, -1.180e-05,
        -0.0055660,  -0.0001008, -1.180e-05,
        0.0046078,   0.0045849,
      // 2074  1 27
      2478599.780733,   7.0,  -4.0,   4.0,   143.7,   143.7,
        0.0728340,   0.5353453, -3.980e-05, -7.360e-06,
        0.4423410,   0.0863512,  9.720e-05, -1.100e-06,
      -18.3394508,   0.0106330,  5.000e-06,
      281.8439636,  14.9993219,  0.000e-00,
        0.5561310,   0.0001144, -1.140e-05,
        0.0099430,   0.0001139, -1.130e-05,
        0.0047487,   0.0047251,
      // 2074  7 24
      2478777.632315,   3.0,  -4.0,   4.0,   144.7,   144.7,
        -0.1072710,   0.5235911,  4.000e-06, -6.620e-06,
        -0.1118430,  -0.0651292, -1.220e-04,  7.400e-07,
        19.7858009,  -0.0086650, -4.000e-06,
      223.3397675,  15.0011539,  0.000e-00,
        0.5552410,  -0.0001032, -1.050e-05,
        0.0090580,  -0.0001027, -1.040e-05,
        0.0046030,   0.0045801,
      // 2075  1 16
      2478954.275050,  19.0,  -4.0,   4.0,   145.8,   145.8,
        0.2538310,   0.5710232, -3.830e-05, -9.260e-06,
        -0.2573060,   0.0536084,  1.646e-04, -7.800e-07,
      -20.7936993,   0.0079950,  5.000e-06,
      102.5607224,  14.9980164,  0.000e-00,
        0.5424350,   0.0000674, -1.270e-05,
        -0.0036840,   0.0000670, -1.270e-05,
        0.0047529,   0.0047292,
      // 2075  7 13
      2479131.753981,   6.0,  -4.0,   4.0,   146.8,   146.8,
        -0.0123990,   0.5062365, -3.000e-06, -5.720e-06,
        0.6599590,  -0.0276704, -1.611e-04,  2.300e-07,
        21.7832794,  -0.0060400, -5.000e-06,
      268.5296936,  15.0000792,  0.000e-00,
        0.5650480,  -0.0000273, -9.700e-06,
        0.0188170,  -0.0000272, -9.700e-06,
        0.0046002,   0.0045773,
      // 2076  1  6
      2479308.921846,  10.0,  -4.0,   4.0,   147.9,   147.9,
        -0.0523840,   0.5824669,  2.200e-06, -9.900e-06,
        -0.9386500,   0.0123863,  2.259e-04, -9.000e-08,
      -22.4751301,   0.0049890,  6.000e-06,
      328.5951538,  14.9969788,  0.000e-00,
        0.5386670,  -0.0000193, -1.310e-05,
        -0.0074340,  -0.0000192, -1.310e-05,
        0.0047545,   0.0047309,
      // 2076  6  1
      2479456.230114,  18.0,  -4.0,   4.0,   148.8,   148.8,
        0.5579180,   0.5113578, -5.100e-06, -6.340e-06,
        -1.2971840,   0.1184780, -8.560e-05, -1.610e-06,
        22.2394409,   0.0049820, -5.000e-06,
        90.4712830,  14.9996204,  0.000e-00,
        0.5567440,   0.0000924, -1.040e-05,
        0.0105540,   0.0000919, -1.040e-05,
        0.0046111,   0.0045882,
      // 2076  7  1
      2479485.785224,   7.0,  -4.0,   4.0,   149.0,   149.0,
        0.0515550,   0.5131084, -9.000e-06, -5.990e-06,
        1.4018250,   0.0101200, -2.023e-04, -1.900e-07,
        23.0226803,  -0.0031070, -5.000e-06,
      283.9685974,  14.9993544,  0.000e-00,
        0.5620440,   0.0000667, -9.900e-06,
        0.0158280,   0.0000664, -9.900e-06,
        0.0045997,   0.0045768,
      // 2076 11 26
      2479633.988205,  12.0,  -4.0,   4.0,   149.9,   149.9,
        0.4616980,   0.5233138,  3.700e-05, -7.240e-06,
        1.0538080,  -0.1496381,  8.790e-05,  2.210e-06,
      -21.1455708,  -0.0071980,  6.000e-06,
        3.1284101,  14.9979744,  0.000e-00,
        0.5544300,  -0.0001257, -1.150e-05,
        0.0082510,  -0.0001251, -1.140e-05,
        0.0047379,   0.0047143,
      // 2077  5 22
      2479810.615339,   3.0,  -4.0,   4.0,   150.9,   150.9,
        0.2931250,   0.5331974,  1.100e-05, -7.890e-06,
        -0.5084780,   0.1652242, -1.093e-04, -2.610e-06,
        20.4935207,   0.0076740, -5.000e-06,
      225.8088531,  15.0005121,  0.000e-00,
        0.5422090,   0.0001046, -1.170e-05,
        -0.0039090,   0.0001041, -1.170e-05,
        0.0046192,   0.0045962,
      // 2077 11 15
      2479988.213845,  17.0,  -4.0,   4.0,   152.0,   152.0,
        0.0975320,   0.4822979,  4.820e-05, -5.610e-06,
        0.4652250,  -0.1760961,  9.090e-05,  2.200e-06,
      -18.7590694,  -0.0099370,  5.000e-06,
        78.8348007,  14.9993620,  0.000e-00,
        0.5687550,  -0.0000760, -1.020e-05,
        0.0225040,  -0.0000756, -1.020e-05,
        0.0047278,   0.0047043,
      // 2078  5 11
      2480165.247856,  18.0,  -4.0,   4.0,   153.1,   153.1,
        -0.0371610,   0.5440809,  4.130e-05, -9.110e-06,
        0.1824810,   0.2062586, -1.285e-04, -3.630e-06,
        18.1216793,   0.0100010, -4.000e-06,
        90.8899078,  15.0015373,  0.000e-00,
        0.5327060,   0.0000363, -1.280e-05,
        -0.0133640,   0.0000361, -1.270e-05,
        0.0046292,   0.0046061,
      // 2078 11  4
      2480342.205375,  17.0,  -4.0,   4.0,   154.2,   154.2,
        -0.0581300,   0.4623883,  3.730e-05, -5.080e-06,
        -0.2238820,  -0.2006119,  9.700e-05,  2.370e-06,
      -15.6358204,  -0.0121840,  3.000e-06,
        79.1226501,  15.0009384,  0.000e-00,
        0.5728190,   0.0000200, -9.800e-06,
        0.0265490,   0.0000199, -9.800e-06,
        0.0047151,   0.0046916,
      // 2079  5  1
      2480519.951537,  11.0,  -4.0,   4.0,   155.2,   155.2,
        -0.2768320,   0.5302500,  6.600e-05, -8.710e-06,
        0.8699940,   0.2314249, -1.394e-04, -4.000e-06,
        15.2018604,   0.0119800, -3.000e-06,
      345.7142334,  15.0025129,  0.000e-00,
        0.5346850,  -0.0000680, -1.270e-05,
        -0.0113960,  -0.0000677, -1.260e-05,
        0.0046410,   0.0046179,
      // 2079 10 24
      2480696.257886,  18.0,  -4.0,   4.0,   156.3,   156.3,
        -0.4936540,   0.4699801,  3.780e-05, -5.730e-06,
        -0.7876280,  -0.2289410,  1.054e-04,  2.950e-06,
      -11.9852600,  -0.0138280,  2.000e-06,
        93.9757385,  15.0024471,  0.000e-00,
        0.5628040,   0.0001114, -1.050e-05,
        0.0165840,   0.0001108, -1.040e-05,
        0.0047007,   0.0046772,
      // 2080  3 21
      2480845.014067,  12.0,  -4.0,   4.0,   157.2,   157.2,
        0.3569220,   0.4650605,  1.300e-06, -5.950e-06,
        -1.0118001,   0.2584886,  4.850e-05, -3.470e-06,
        0.7143200,   0.0158230,  0.000e-00,
      358.2857361,  15.0042191,  0.000e-00,
        0.5580240,  -0.0001125, -1.080e-05,
        0.0118270,  -0.0001119, -1.080e-05,
        0.0046943,   0.0046709,
      // 2080  9 13
      2481021.193162,  17.0,  -4.0,   4.0,   158.3,   158.3,
        0.6977880,   0.5016410, -5.860e-05, -7.930e-06,
        0.8404610,  -0.2748218, -5.910e-05,  4.560e-06,
        3.2384601,  -0.0153320, -1.000e-06,
        76.1157913,  15.0049372,  0.000e-00,
        0.5377100,   0.0000795, -1.240e-05,
        -0.0083850,   0.0000791, -1.230e-05,
        0.0046467,   0.0046235,
      // 2081  3 10
      2481199.141327,  15.0,  -4.0,   4.0,   159.4,   159.4,
        0.0028400,   0.4436354, -4.300e-06, -4.930e-06,
        -0.4157660,   0.2451389,  3.770e-05, -2.890e-06,
        -3.6791999,   0.0157780,  1.000e-06,
        42.5062790,  15.0037861,  0.000e-00,
        0.5710770,  -0.0000441, -9.900e-06,
        0.0248150,  -0.0000439, -9.900e-06,
        0.0047093,   0.0046859,
      // 2081  9  3
      2481375.880215,   9.0,  -4.0,   4.0,   160.5,   160.5,
        0.0940360,   0.5156432, -2.680e-05, -8.690e-06,
        0.3326230,  -0.2740713, -6.060e-05,  4.820e-06,
        7.2219300,  -0.0146870, -2.000e-06,
      315.1885986,  15.0046968,  0.000e-00,
        0.5320730,  -0.0000041, -1.290e-05,
        -0.0139950,  -0.0000041, -1.280e-05,
        0.0046341,   0.0046110,
      // 2082  2 27
      2481553.115970,  15.0,  -4.0,   4.0,   161.5,   161.5,
        -0.0597740,   0.4489242, -2.630e-05, -5.020e-06,
        0.3485950,   0.2372852,  2.500e-05, -2.830e-06,
        -8.0277300,   0.0151660,  2.000e-06,
        41.8812790,  15.0029869,  0.000e-00,
        0.5713290,   0.0000480, -1.000e-05,
        0.0250650,   0.0000478, -9.900e-06,
        0.0047227,   0.0046992,
      // 2082  8 24
      2481730.553017,   1.0,  -4.0,   4.0,   162.6,   162.6,
        -0.3166870,   0.5078963, -2.100e-06, -7.840e-06,
        -0.2896200,  -0.2526639, -5.170e-05,  4.100e-06,
        10.9898796,  -0.0136710, -2.000e-06,
      194.3823090,  15.0040703,  0.000e-00,
        0.5385440,  -0.0000890, -1.210e-05,
        -0.0075560,  -0.0000885, -1.210e-05,
        0.0046233,   0.0046003,
      // 2083  2 16
      2481907.254586,  18.0,  -4.0,   4.0,   163.7,   163.7,
        -0.4969790,   0.4805608, -2.730e-05, -6.240e-06,
        0.8892720,   0.2332428,  2.200e-05, -3.200e-06,
      -12.0817900,   0.0139800,  3.000e-06,
        86.5272598,  15.0018902,  0.000e-00,
        0.5590220,   0.0001187, -1.100e-05,
        0.0128200,   0.0001181, -1.100e-05,
        0.0047337,   0.0047101,
      // 2083  7 15
      2482055.509987,   0.0,  -4.0,   4.0,   164.6,   164.6,
        0.2816440,   0.5021506, -3.470e-05, -6.060e-06,
        1.5256760,  -0.1350827, -1.975e-04,  1.740e-06,
        21.5035095,  -0.0062550, -5.000e-06,
      178.4690857,  15.0002241,  0.000e-00,
        0.5588050,  -0.0000870, -1.020e-05,
        0.0126040,  -0.0000866, -1.010e-05,
        0.0046002,   0.0045773,
      // 2083  8 13
      2482085.024088,  13.0,  -4.0,   4.0,   164.8,   164.8,
        -0.2870560,   0.4877688, -6.000e-06, -6.330e-06,
        -1.1932560,  -0.2183425, -3.230e-05,  3.020e-06,
        14.4864702,  -0.0122470, -3.000e-06,
        13.7646503,  15.0031261,  0.000e-00,
        0.5525100,  -0.0001228, -1.080e-05,
        0.0063410,  -0.0001222, -1.070e-05,
        0.0046145,   0.0045915,
      // 2084  1  7
      2482232.229439,  18.0,  -4.0,   4.0,   165.7,   165.7,
        0.5175810,   0.5647201, -7.300e-05, -9.390e-06,
        -0.9807410,   0.1293900,  2.197e-04, -2.330e-06,
      -22.2998409,   0.0051300,  6.000e-06,
        88.4517975,  14.9970465,  0.000e-00,
        0.5400660,   0.0000397, -1.300e-05,
        -0.0060420,   0.0000395, -1.290e-05,
        0.0047545,   0.0047308,
      // 2084  7  3
      2482409.576688,   2.0,  -4.0,   4.0,   166.8,   166.8,
        0.2343940,   0.4966959, -3.560e-05, -5.550e-06,
        0.7907370,  -0.0956841, -1.715e-04,  1.190e-06,
        22.8734608,  -0.0033770, -5.000e-06,
      208.8727264,  14.9994040,  0.000e-00,
        0.5656190,  -0.0000042, -9.700e-06,
        0.0193840,  -0.0000042, -9.600e-06,
        0.0045999,   0.0045770,
      // 2084 12 27
      2482586.884583,   9.0,  -4.0,   4.0,   167.9,   167.9,
        -0.0712250,   0.5729242, -1.550e-05, -9.550e-06,
        -0.4246250,   0.0855705,  2.007e-04, -1.570e-06,
      -23.2655506,   0.0018860,  6.000e-06,
      314.6755981,  14.9964437,  0.000e-00,
        0.5400180,  -0.0000450, -1.300e-05,
        -0.0060890,  -0.0000448, -1.290e-05,
        0.0047538,   0.0047301,
      // 2085  6 22
      2482763.639767,   3.0,  -4.0,   4.0,   169.0,   169.0,
        -0.1779090,   0.5161241, -2.350e-05, -6.230e-06,
        0.0653340,  -0.0574035, -1.530e-04,  8.000e-07,
        23.4200001,  -0.0002990, -6.000e-06,
      224.4416656,  14.9990730,  0.000e-00,
        0.5590680,   0.0000976, -1.020e-05,
        0.0128660,   0.0000972, -1.010e-05,
        0.0046016,   0.0045787,
      // 2085 12 16
      2482941.442914,  23.0,  -4.0,   4.0,   170.1,   170.1,
        0.1855310,   0.5513915, -1.700e-06, -8.010e-06,
        0.2916440,   0.0368398,  1.552e-04, -6.600e-07,
      -23.3582802,  -0.0014690,  6.000e-06,
      165.9941101,  14.9963903,  0.000e-00,
        0.5514440,  -0.0001256, -1.180e-05,
        0.0052800,  -0.0001250, -1.180e-05,
        0.0047508,   0.0047272,
      // 2086  6 11
      2483117.963355,  11.0,  -4.0,   4.0,   171.2,   171.2,
        -0.0889290,   0.5506569, -1.800e-05, -7.900e-06,
        -0.7190780,  -0.0172013, -1.237e-04,  3.400e-07,
        23.1259308,   0.0027250, -6.000e-06,
      345.0240479,  14.9992704,  0.000e-00,
        0.5446280,   0.0001193, -1.140e-05,
        -0.0015020,   0.0001187, -1.140e-05,
        0.0046053,   0.0045824,
      // 2086 12  6
      2483295.735363,   6.0,  -4.0,   4.0,   172.3,   172.3,
        0.1994940,   0.5190221,  9.600e-06, -6.300e-06,
        1.0162050,  -0.0086670,  1.080e-04,  0.000e-00,
      -22.5367298,  -0.0048220,  6.000e-06,
      272.2562561,  14.9969711,  0.000e-00,
        0.5667640,  -0.0001039, -1.050e-05,
        0.0205230,  -0.0001034, -1.040e-05,
        0.0047453,   0.0047216,
      // 2087  5  2
      2483443.253264,  18.0,  -4.0,   4.0,   173.2,   173.2,
        -0.2798980,   0.5708983,  3.710e-05, -9.750e-06,
        1.0791770,   0.1233340, -1.662e-04, -2.020e-06,
        15.6033001,   0.0119960, -3.000e-06,
        90.7509537,  15.0024843,  0.000e-00,
        0.5323200,   0.0000110, -1.290e-05,
        -0.0137480,   0.0000110, -1.280e-05,
        0.0046396,   0.0046165,
      // 2087  6  1
      2483472.560582,   1.0,  -4.0,   4.0,   173.4,   173.4,
        -0.1970420,   0.5777194,  8.000e-06, -9.580e-06,
        -1.4291559,   0.0266620, -7.720e-05, -3.600e-07,
        22.0598507,   0.0055650, -5.000e-06,
      195.5139313,  14.9998741,  0.000e-00,
        0.5329990,   0.0000702, -1.260e-05,
        -0.0130730,   0.0000698, -1.250e-05,
        0.0046114,   0.0045884,
      // 2087 10 26
      2483619.990934,  12.0,  -4.0,   4.0,   174.3,   174.3,
        -0.2114530,   0.4912907,  2.060e-05, -5.560e-06,
        -1.2755140,  -0.1252382,  1.258e-04,  1.350e-06,
      -12.6051702,  -0.0138370,  3.000e-06,
        4.0218201,  15.0022755,  0.000e-00,
        0.5706940,   0.0000462, -9.900e-06,
        0.0244340,   0.0000460, -9.900e-06,
        0.0047032,   0.0046798,
      // 2088  4 21
      2483797.938767,  11.0,  -4.0,   4.0,   175.4,   175.4,
        0.1570270,   0.5541417,  2.520e-05, -8.910e-06,
        0.4674660,   0.1426972, -9.800e-05, -2.220e-06,
        12.2741404,   0.0136370, -3.000e-06,
      345.3624268,  15.0033512,  0.000e-00,
        0.5378950,  -0.0000991, -1.240e-05,
        -0.0082020,  -0.0000986, -1.240e-05,
        0.0046525,   0.0046294,
      // 2088 10 14
      2483974.116726,  15.0,  -4.0,   4.0,   176.5,   176.5,
        -0.0476300,   0.5108530,  1.000e-06, -6.630e-06,
        -0.5431530,  -0.1482068,  8.120e-05,  1.840e-06,
        -8.6571102,  -0.0150030,  2.000e-06,
        48.5671997,  15.0035677,  0.000e-00,
        0.5578150,   0.0001150, -1.080e-05,
        0.0116200,   0.0001145, -1.080e-05,
        0.0046881,   0.0046648,
      // 2089  4 10
      2484152.447703,  23.0,  -4.0,   4.0,   177.6,   177.6,
        0.2251360,   0.5187392,  2.160e-05, -7.050e-06,
        -0.2800910,   0.1510484, -2.930e-05, -1.970e-06,
        8.4947596,   0.0149030, -2.000e-06,
      164.7543945,  15.0039558,  0.000e-00,
        0.5527440,  -0.0001293, -1.110e-05,
        0.0065740,  -0.0001287, -1.110e-05,
        0.0046672,   0.0046439,
      // 2089 10  4
      2484328.552352,   1.0,  -4.0,   4.0,   178.7,   178.7,
        -0.0739150,   0.5398158, -2.600e-06, -8.380e-06,
        0.2500610,  -0.1683441,  2.060e-05,  2.540e-06,
        -4.5712500,  -0.0156200,  1.000e-06,
      197.8399048,  15.0044975,  0.000e-00,
        0.5418200,   0.0001101, -1.220e-05,
        -0.0042960,   0.0001096, -1.210e-05,
        0.0046728,   0.0046495,
      // 2090  3 31
      2484506.651480,   4.0,  -4.0,   4.0,   179.8,   179.8,
        0.5079390,   0.4876581, -2.300e-06, -5.650e-06,
        -0.9963960,   0.1530540,  2.160e-05, -1.700e-06,
        4.3302302,   0.0157450, -1.000e-06,
      238.9822845,  15.0042582,  0.000e-00,
        0.5673880,  -0.0000803, -1.000e-05,
        0.0211450,  -0.0000799, -1.000e-05,
        0.0046826,   0.0046592,
      // 2090  9 23
      2484683.205976,  17.0,  -4.0,   4.0,   180.9,   180.9,
        0.3121450,   0.5554707, -1.920e-05, -9.460e-06,
        0.8614840,  -0.1789025, -4.590e-05,  2.960e-06,
        -0.4715300,  -0.0157740,  0.000e-00,
        76.9649811,  15.0049915,  0.000e-00,
        0.5333920,   0.0000148, -1.290e-05,
        -0.0126820,   0.0000147, -1.290e-05,
        0.0046583,   0.0046351,
      // 2091  2 18
      2484830.912960,  10.0,  -4.0,   4.0,   181.9,   181.9,
        -0.2600120,   0.4957125, -1.770e-05, -5.810e-06,
        1.1497459,   0.1324781,  1.550e-05, -1.480e-06,
      -11.4719105,   0.0144480,  3.000e-06,
      326.5590210,  15.0021276,  0.000e-00,
        0.5691080,   0.0000760, -1.020e-05,
        0.0228560,   0.0000756, -1.020e-05,
        0.0047326,   0.0047090,
      // 2091  8 15
      2485008.524108,   1.0,  -4.0,   4.0,   183.0,   183.0,
        0.0098390,   0.5435230, -4.400e-06, -8.130e-06,
        -0.9776840,  -0.1290790, -4.220e-05,  1.870e-06,
        14.0012903,  -0.0127010, -3.000e-06,
      193.8406372,  15.0034065,  0.000e-00,
        0.5417210,  -0.0001194, -1.180e-05,
        -0.0043940,  -0.0001188, -1.170e-05,
        0.0046152,   0.0045922,
      // 2092  2  7
      2485185.132178,  15.0,  -4.0,   4.0,   184.1,   184.1,
        -0.1842980,   0.5315152, -3.020e-05, -7.390e-06,
        0.4019850,   0.1167481,  7.260e-05, -1.540e-06,
      -15.1741304,   0.0128060,  4.000e-06,
        41.5092010,  15.0008192,  0.000e-00,
        0.5548470,   0.0001236, -1.140e-05,
        0.0086650,   0.0001230, -1.140e-05,
        0.0047418,   0.0047182,
      // 2092  8  3
      2485362.916352,  10.0,  -4.0,   4.0,   185.2,   185.2,
        -0.0332710,   0.5169117, -3.100e-06, -6.470e-06,
        -0.2017300,  -0.0955994, -9.880e-05,  1.130e-06,
        17.1564007,  -0.0108970, -4.000e-06,
      328.4386292,  15.0022726,  0.000e-00,
        0.5564140,  -0.0001036, -1.040e-05,
        0.0102250,  -0.0001031, -1.040e-05,
        0.0046082,   0.0045853,
      // 2093  1 27
      2485539.640464,   3.0,  -4.0,   4.0,   186.3,   186.3,
        -0.1666270,   0.5672931, -2.370e-05, -9.270e-06,
        -0.3043700,   0.0920881,  1.430e-04, -1.420e-06,
      -18.2777996,   0.0106710,  4.000e-06,
      221.8415375,  14.9994307,  0.000e-00,
        0.5416390,   0.0000822, -1.280e-05,
        -0.0044760,   0.0000818, -1.270e-05,
        0.0047483,   0.0047246,
      // 2093  7 23
      2485717.022267,  13.0,  -4.0,   4.0,   187.5,   187.5,
        0.3038610,   0.5026286, -2.220e-05, -5.660e-06,
        0.5385460,  -0.0619964, -1.412e-04,  6.300e-07,
        19.8195000,  -0.0086310, -4.000e-06,
        13.3326702,  15.0010881,  0.000e-00,
        0.5654530,  -0.0000312, -9.700e-06,
        0.0192190,  -0.0000311, -9.700e-06,
        0.0046031,   0.0045802,
      // 2094  1 16
      2485894.291012,  19.0,  -4.0,   4.0,   188.6,   188.6,
        0.1004850,   0.5794221, -1.680e-05, -9.830e-06,
        -0.9279600,   0.0570105,  2.081e-04, -8.600e-07,
      -20.7150002,   0.0080900,  5.000e-06,
      102.5438385,  14.9980841,  0.000e-00,
        0.5387190,  -0.0000288, -1.310e-05,
        -0.0073820,  -0.0000287, -1.300e-05,
        0.0047526,   0.0047289,
      // 2094  6 13
      2486041.515408,   0.0,  -4.0,   4.0,   189.5,   189.5,
        0.0269590,   0.5208397,  5.100e-06, -6.550e-06,
        -1.4740109,   0.0792208, -8.670e-05, -1.130e-06,
        23.2214699,   0.0020410, -6.000e-06,
      179.9343872,  14.9991474,  0.000e-00,
        0.5554070,   0.0001135, -1.050e-05,
        0.0092230,   0.0001130, -1.040e-05,
        0.0046050,   0.0045821,
      // 2094  7 12
      2486071.058738,  13.0,  -4.0,   4.0,   189.7,   189.7,
        -0.1386810,   0.5136721, -1.400e-05, -6.050e-06,
        1.3244720,  -0.0279224, -1.890e-04,  2.700e-07,
        21.8223801,  -0.0059630, -5.000e-06,
        13.5212402,  15.0000753,  0.000e-00,
        0.5614160,   0.0000837, -1.000e-05,
        0.0152020,   0.0000833, -9.900e-06,
        0.0046000,   0.0045771,
      // 2094 12  7
      2486219.337449,  20.0,  -4.0,   4.0,   190.6,   190.6,
        0.1780400,   0.5314007,  4.140e-05, -7.280e-06,
        1.1421460,  -0.1082936,  1.021e-04,  1.610e-06,
      -22.7169094,  -0.0040770,  6.000e-06,
      122.0875015,  14.9968672,  0.000e-00,
        0.5557760,  -0.0001178, -1.140e-05,
        0.0095900,  -0.0001172, -1.130e-05,
        0.0047458,   0.0047222,
      // 2095  6  2
      2486395.921989,  10.0,  -4.0,   4.0,   191.8,   191.8,
        0.0756390,   0.5455677,  1.480e-05, -8.190e-06,
        -0.6391210,   0.1273289, -1.184e-04, -2.070e-06,
        22.2458191,   0.0049410, -5.000e-06,
      330.4539795,  14.9996948,  0.000e-00,
        0.5408500,   0.0001110, -1.180e-05,
        -0.0052610,   0.0001105, -1.180e-05,
        0.0046109,   0.0045879,
      // 2095 11 27
      2486573.543720,   1.0,  -4.0,   4.0,   192.9,   192.9,
        0.1118980,   0.4919252,  4.500e-05, -5.690e-06,
        0.4780160,  -0.1422028,  1.120e-04,  1.790e-06,
      -21.1289902,  -0.0072340,  5.000e-06,
      198.1463928,  14.9979067,  0.000e-00,
        0.5699750,  -0.0000741, -1.020e-05,
        0.0237180,  -0.0000738, -1.010e-05,
        0.0047381,   0.0047145,
      // 2096  5 22
      2486750.567525,   2.0,  -4.0,   4.0,   194.0,   194.0,
        0.1759840,   0.5567474,  2.940e-05, -9.370e-06,
        0.1794090,   0.1715820, -1.492e-04, -3.050e-06,
        20.5604591,   0.0075700, -5.000e-06,
      210.7922821,  15.0005331,  0.000e-00,
        0.5318950,   0.0000222, -1.280e-05,
        -0.0141720,   0.0000221, -1.270e-05,
        0.0046188,   0.0045958,
      // 2096 11 15
      2486927.525172,   1.0,  -4.0,   4.0,   195.2,   195.2,
        0.1176950,   0.4732066,  3.320e-05, -5.220e-06,
        -0.2582690,  -0.1738297,  1.212e-04,  2.070e-06,
      -18.6864605,  -0.0100030,  4.000e-06,
      198.8560944,  14.9993868,  0.000e-00,
        0.5734460,   0.0000187, -9.900e-06,
        0.0271720,   0.0000186, -9.800e-06,
        0.0047272,   0.0047037,
      // 2097  5 11
      2487105.273975,  19.0,  -4.0,   4.0,   196.3,   196.3,
        -0.0688980,   0.5409653,  5.890e-05, -8.860e-06,
        0.8834620,   0.2023790, -1.633e-04, -3.500e-06,
        18.2287407,   0.0099180, -4.000e-06,
      105.8908463,  15.0014791,  0.000e-00,
        0.5344970,  -0.0000795, -1.260e-05,
        -0.0115830,  -0.0000791, -1.250e-05,
        0.0046292,   0.0046062,
      // 2097 11  4
      2487281.584320,   2.0,  -4.0,   4.0,   197.4,   197.4,
        -0.3662270,   0.4810209,  3.930e-05, -5.920e-06,
        -0.8141590,  -0.2083901,  1.306e-04,  2.720e-06,
      -15.5641804,  -0.0122010,  3.000e-06,
      214.1219025,  15.0010271,  0.000e-00,
        0.5628570,   0.0001106, -1.060e-05,
        0.0166360,   0.0001101, -1.050e-05,
        0.0047139,   0.0046904,
      // 2098  4  1
      2487430.335079,  20.0,  -4.0,   4.0,   198.4,   198.4,
        0.5066000,   0.4658640,  7.500e-06, -5.910e-06,
        -0.9771950,   0.2535759,  2.430e-05, -3.380e-06,
        4.9957700,   0.0154060, -1.000e-06,
      119.1123581,  15.0041676,  0.000e-00,
        0.5579940,  -0.0001170, -1.080e-05,
        0.0117970,  -0.0001164, -1.070e-05,
        0.0046801,   0.0046568,
      // 2098  9 25
      2487606.521715,   1.0,  -4.0,   4.0,   199.5,   199.5,
        0.7806730,   0.5018378, -4.960e-05, -7.980e-06,
        0.8466230,  -0.2769829, -3.660e-05,  4.630e-06,
        -1.0159700,  -0.0155420,  0.000e-00,
      197.0843353,  15.0048285,  0.000e-00,
        0.5378550,   0.0000725, -1.250e-05,
        -0.0082410,   0.0000721, -1.240e-05,
        0.0046602,   0.0046370,
      // 2098 10 24
      2487635.941792,  11.0,  -4.0,   4.0,   199.7,   199.7,
        -0.4697060,   0.5027987,  4.330e-05, -7.430e-06,
        -1.4839970,  -0.2423587,  1.518e-04,  3.730e-06,
      -12.0205898,  -0.0137760,  2.000e-06,
      348.9751587,  15.0025234,  0.000e-00,
        0.5464500,   0.0001058, -1.190e-05,
        0.0003110,   0.0001053, -1.190e-05,
        0.0046996,   0.0046762,
      // 2099  3 21
      2487784.454537,  23.0,  -4.0,   4.0,   200.6,   200.6,
        0.2361260,   0.4421040, -9.000e-07, -4.900e-06,
        -0.3281440,   0.2469355,  1.260e-05, -2.910e-06,
        0.6538700,   0.0158550,  0.000e-00,
      163.2803192,  15.0041523,  0.000e-00,
        0.5705230,  -0.0000485, -9.900e-06,
        0.0242640,  -0.0000483, -9.800e-06,
        0.0046955,   0.0046721,
      // 2099  9 14
      2487961.206863,  17.0,  -4.0,   4.0,   201.8,   201.8,
        0.2084050,   0.5110425, -1.970e-05, -8.600e-06,
        0.3352460,  -0.2818505, -3.750e-05,  4.950e-06,
        3.0830500,  -0.0153280, -1.000e-06,
        76.1433563,  15.0049667,  0.000e-00,
        0.5328290,  -0.0000141, -1.290e-05,
        -0.0132430,  -0.0000140, -1.280e-05,
        0.0046466,   0.0046235,
      // 2100  3 10
      2488138.436239,  22.0,  -4.0,   4.0,   202.9,   202.9,
        -0.3579980,   0.4455085, -5.400e-06, -5.010e-06,
        0.1538330,   0.2459721,  9.200e-06, -2.940e-06,
        -3.8034201,   0.0157660,  1.000e-06,
      147.4898071,  15.0037689,  0.000e-00,
        0.5700390,   0.0000663, -1.000e-05,
        0.0237830,   0.0000659, -1.000e-05,
        0.0047099,   0.0046864,
      // 2100  9  4
      2488315.867596,   9.0,  -4.0,   4.0,   204.1,   204.1,
        -0.0703280,   0.4991349, -3.000e-06, -7.630e-06,
        -0.3459280,  -0.2657267, -2.650e-05,  4.270e-06,
        7.0744300,  -0.0147360, -2.000e-06,
      315.2189026,  15.0046768,  0.000e-00,
        0.5398730,  -0.0001031, -1.210e-05,
        -0.0062330,  -0.0001026, -1.200e-05,
        0.0046346,   0.0046116
    ));
  }
}
