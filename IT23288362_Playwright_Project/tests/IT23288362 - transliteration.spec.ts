
import { test, expect } from '@playwright/test';

const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Greeting phrase", input: "oyaa kaaladha inne?", expected: "ඔයා කාලද ඉන්නේ?" },
    { id: "Pos_Fun_0002", name: "Mixed-language input", input: "oyaa adha event ekata enavadha?", expected: "ඔයා අද event එකට එනවද?" },
    { id: "Pos_Fun_0003", name: "Short request", input: "oyaagee bike ekee maavath dhaagena yanavadha?", expected: "ඔයාගේ bike එකේ මාවත් දාගෙන යනවද?" },
    { id: "Pos_Fun_0004", name: "Simple sentence", input: "mama adha gedhara yanavaa", expected: "මම අද ගෙදර යනවා" },
    { id: "Pos_Fun_0005", name: "Compound sentence", input: "mama dhaen paasal yanavaa, passee ennam", expected: "මම දැන් පාසල් යනවා, පස්සේ එන්නම්" },
    { id: "Pos_Fun_0006", name: "Question sentence", input: "oyaa monavadha dhanne?", expected: "ඔයා මොනවද දන්නෙ?" },
    { id: "Pos_Fun_0007", name: "Imperative", input: "vahaama enna", expected: "වහාම එන්න" },
    { id: "Pos_Fun_0008", name: "Polite phrase", input: "karuNaakaralaa gedhara geettuva vahanna", expected: "කරුණාකරලා ගෙදර ගේට්ටුව වහන්න" },
    { id: "Pos_Fun_0009", name: "Negative sentence", input: "eyaata baehae", expected: "එයාට බැහැ" },
    { id: "Pos_Fun_0010", name: "Long sentence", input: "eyaalaa gedhara gihin kaeema kaalaa kiyalaa kivvadha", expected: "එයාලා ගෙදර ගිහින් කෑම කාලා කියලා කිව්වද" },
    { id: "Pos_Fun_0011", name: "Thanks phrase", input: "vathura dhunnata sthuthiyi", expected: "වතුර දුන්නට ස්තුතියි" },
    { id: "Pos_Fun_0012", name: "Apology phrase", input: "samaavenna", expected: "සමාවෙන්න" },
    { id: "Pos_Fun_0013", name: "Instruction sentence", input: "ahasa lassanayi needha", expected: "අහස ලස්සනයි නේද" },
    { id: "Pos_Fun_0014", name: "Request sentence", input:  "mata oyaage potha dhenna puluvandha", expected: "මට ඔයාගෙ පොත දෙන්න පුලුවන්ද" },
    { id: "Pos_Fun_0015", name: "Future tense", input: "api heta banagedhara yamudha", expected: "අපි හෙට බනගෙදර යමු" },
    { id: "Pos_Fun_0016", name: "Past tense", input: "mama vibahagayata paadam karaa", expected: "" },
    { id: "Pos_Fun_0017", name: "Emotional phrase", input: "mama oyaata aadhareyi", expected: "මම ඔයාට ආදරෙයි" },
    { id: "Pos_Fun_0018", name: "Advice sentence", input: "oyaa hodhata paadam karanna", expected: "ඔයා හොදට පාඩම් කරන්න" },
    { id: "Pos_Fun_0019", name: "Motivation", input: "oyaa ee dhee hodhata karaa", expected: "ඔයා ඒ දේ හොදට කරා" },
    { id: "Pos_Fun_0020", name: "Simple chat", input: "oyaa raeeta kaaladha?", expected: "ඔයා රෑට කාලද?" },
    { id: "Pos_Fun_0021", name: "Imperative", input: "siyalu vaeda navathvanu", expected: "සියලු වැඩ නවත්වනු" },
    { id: "Pos_Fun_0022", name: "Apology phrase", input: "oba nivaeradhii", expected: "" },
    { id: "Pos_Fun_0023", name: "Simple sentence", input: "ayiyaa gedhara innavaa", expected: "" },
    { id: "Pos_Fun_0024", name: "Greeting phrase", input: "oyaa hodhin innavaa needha?", expected: "ඔයා හොදින් ඉන්නවා නේද?" },

    

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Empty input", input: "", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0002", name: "Random symbols", input: "$$$!", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0003", name: "Numbers only", input: "562314", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0004", name: "English only", input: "hi brother", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0005", name: "Wrong spelling", input: "oyakld", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0006", name: "Slang input", input: "thnx bro", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0007", name: "Mixed symbols", input: "ayya !!! awa", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_Fun_0008", name: "Whitespace input", input: "   ", expected: "EXPECTED_TO_FAIL" },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Real-time conversion", input: "amma awadha", expected: "අම්ම අwඅද" },
    { id: "Pos_UI_0002", name: "Clear input", input: "mama bath kanna", expected: "මම බත් කන්න" },
    { id: "Pos_UI_0003", name: "Font rendering", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_UI_0004", name: "Text selection", input: "mata potha dhenna", expected: "මට පොත දෙන්න" },
    { id: "Pos_UI_0005", name: "Responsive display", input: "mama ehema karanavaa", expected: "මම එහෙම කරනවා" },

    // ================= NEGATIVE UI =================
    { id: "Neg_UI_0001", name: "Long UI lag", input: "paass paass paass paass paass", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_UI_0002", name: "Overflow handling", input: "dhunnaa ".repeat(40), expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_UI_0003", name: "Page reload behavior", input: "man gedhara yanavaa", expected: "EXPECTED_TO_FAIL" },
    { id: "Neg_UI_0004", name: "No update UI", input: "hello", expected: "EXPECTED_TO_FAIL" },


  ];

{
  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 50 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(200);
      }
    }
    // Wait for conversion to complete
    if (tc.input.length > 20) {
      await page.waitForTimeout(5000);
    } else {
      await page.waitForTimeout(2000);
    }



    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Input: ${tc.input} | Expected: ${tc.expected} | Result: ${output}`);
  });
}
}

