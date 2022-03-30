# Levenshthein Distance Calculator

### Demo: https://psprateek7.github.io/LevenshtheinDistanceCalculator/


This project lets user calculate the Levenshthein distance between two strings.

The Levenshtein distance is a string metric for measuring difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.

It uses Macrometa jsC8 driver to connect with macrometa GDN.
and utilises "collection" to store, retrieve the generated Levenshthein distance using RestQL function of jsC8

CollectionName - 'levenshtein_distance_record'

### `createCollection`
Creates a new collection with the provided name..

### `checkIfCollectionExists`
Checks wether the existing collection is already present using the "collection name".

### `getCollectionDetails`
Returns the collection details that is already created in the GDN.

### `deleteCollection`
Deletes the specific collection.

### `calculateLevenshteinDistance`
takes two "string" params and returns the calculated "Levenshthein distance"   


## `Used querries`
 
### getLevenshteinRecords
```
FOR i IN levenshtein_distance_record
SORT i._key DESC
RETURN {
    id:i._id,
    key:i._key,
    string1:i.string1,
    string2:i.string2,
    levenshtein_distance:i.levenshtein_distance
}

```

### insertLevenshteinRecord
```
INSERT {string1:@string1, string2:@string2, levenshtein_distance:LEVENSHTEIN_DISTANCE(@string1, @string2) } INTO levenshtein_distance_record

```

### removeLevenshteinRecord
```
REMOVE @_key IN levenshtein_distance_record

```

###Prerequisites
 Node

###for local development
npm install
npm run start

###Deploy on GH Pages:
npm run predeploy
npm run deploy



