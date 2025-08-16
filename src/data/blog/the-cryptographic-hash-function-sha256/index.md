---
title: The Cryptographic Hash Function Sha256 implemented in C#
description: Hi people. I would like to share with you a implementation of the SHA256 hash function in C# programming language. So that you can unders...
publishDate: 2018-01-09
tags: [c#, cryptography, sha256, hash function]
image: ./sha256_1024x576.jpeg
---

Hi people.
I would like to share with you a implementation of the SHA256 hash function in C# programming language. So that you can understand it more easily, I tried to make it as simple as possible and more faithful to what the document says. I know that for many people the algorithm can be complicated, but I assure you it is really very simple. :3

To call the function, do the following:

1. Move the sha256.cs file to your Visual Studio Project.
2. Open the file sha256.cs and change the namespace for your project.
3. Call funcion HashComputation
example:

```csharp
Sha256 hasher = new Sha256();
byte[] hash = hasher.HashComputation(input)
```

...where input is the byte[] variable that you want to hash.

The RAR file contains two files:
A pdf document that explains the step by step sha-256 algorithm.
A C# code file, created using the information in the previous document.
If you prefer not to download anything, you can view the files online.

MEGA: [Download RAR file](https://mega.nz/#!eckT0KYK!zC4RcNr3m3XJTQB_MFolzAvOgpcH-kV1UUdfbFdNnZw)

DRIVE: [View Document](https://drive.google.com/open?id=1YXrs22Uj1jnsVeVw3SMcKmEXBKvtA708)

GITHUB: [View Code](https://github.com/Eptagone/Sha256-Hash-Algorithm/blob/master/sha256.cs)

Bitcoin Donation Address: `3FUskDSShN4kh71NARrsbbWJmsXtWXkrC3`
