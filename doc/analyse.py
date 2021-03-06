# -*- coding utf-8 -*-
import nltk
from nltk.corpus import PlaintextCorpusReader

corpus_root = '.'
corpus_file_name = "corpus-english"
wordLists = PlaintextCorpusReader(corpus_root, corpus_file_name)

corpus1 = wordLists.words('corpus-english.txt')
fdist1 = nltk.FreqDist(corpus1)
vocabulary1 = fdist1.keys()

# Diversité lexicale
print("Diversite lexicale : {}".format(len(corpus1) / len(vocabulary1)))

# Distribution fréquentielle
fdist1.plot(100, cumulative=True)

# Nombre moyen de caractères par mot
res = 0
for mot in vocabulary1:
	res += len(mot)
print("Nombre moyen de caracteres par mots: {}".format(res / len(vocabulary1)))

# Richesse linguistique
from nltk.corpus import udhr

udhrfr = nltk.corpus.udhr.words('English-Latin1')
fdist2 = nltk.FreqDist(udhrfr)
vocabulary2 = fdist2.keys()

print("Richesse linguitique: {}".format(len(vocabulary1) / len(vocabulary2)))
