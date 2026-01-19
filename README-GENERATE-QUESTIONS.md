# How to Generate questions_1000.md with All Actual Questions

The `questions_1000.md` file currently has placeholders. To generate it with all actual questions:

## Option 1: Using tsx (Recommended)

```bash
npx tsx generate-questions-from-source.ts
```

This will read from `src/questionsBank.ts` and generate the complete markdown file with all 1000 actual questions.

## Option 2: Using the Build Output

1. Build the project: `npm run build`
2. The questions are in the compiled output
3. Create a script to extract them from the build

## Option 3: Manual Generation

The questions are defined in `src/questionsBank.ts`. Each level has pattern functions that generate 100 questions. The actual questions are generated when the code runs.

## Current Status

- ✅ `src/questionsBank.ts` has all question patterns defined
- ✅ Questions are generated programmatically 
- ❌ `questions_1000.md` currently has placeholders only
- ✅ Script `generate-questions-from-source.ts` is ready to run

Run the script to populate `questions_1000.md` with all actual questions!
