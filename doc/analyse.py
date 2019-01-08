# -*- coding utf-8 -*-

import nltk
from nltk.corpus import PlaintextCorpusReader

corpus_root = '.'
corpus_file_name = "corpus"
wordLists = PlaintextCorpusReader(corpus_root, corpus_file_name)

corpus1 = wordLists.words('corpus')
fdist1 = nltk.FreqDist(corpus1)
vocabulary1 = fdist1.keys()

# Diversite lexicale
float(len(corpus1)) / len(vocabulary1)
# 3.305263157894737

# Distribution frépquentielle
fdist1.plot(100, cumulative=True)
# cf graphe

# Nombre moyen de caractères par mot
res = 0
for mot in vocabulary1:
	res += len(mot)
res
# 5.124561403508772

# Richesse linguistique
from nltk.corpus import udhr
udhrfr = nltk.corpus.udhr.words('French_Francais-Latin1')
fdist2 = nltk.FreqDist(udhrfr)
vocabulary2 = fdist2.keys()
float(len(vocabulary1)) / len(vocabulary2)
# 0.945273631840796
