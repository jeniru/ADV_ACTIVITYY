import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://www.latestfreestuff.co.uk/wp-content/uploads/2021/09/save-money-on-pets.jpeg' }}
        style={styles.heroImage}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Pets</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petCarousel}>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Max</Text>
            
          </View>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Cherry</Text>
          </View>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_640.jpg' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Novie</Text>
          </View>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/image-photo/lovely-bunny-easter-fluffy-baby-600nw-2493059551.jpg' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Adhie</Text>
          </View>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADgQAAIBAwMCBAMHAwIHAAAAAAECAwAEEQUSITFBEyJRYQYycRQjgZGhscFC0fAV8TNDUnKCktL/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAMREAAgIBBAAFAgQFBQAAAAAAAAECEQMEEiExBRMiQVFxsTJhwfAUI4GRoRVCYtHh/9oADAMBAAIRAxEAPwDJR3c1iyTSMSARkHuKxaWUoS56MkuUaSXUZr61jkiRgicp5eCK15NQm2hFAugfxYUljIyMb46WeOKSkiXLouNy1pueJwoYfKe9UPI8UuOh+JLkhp+oW+o28oL7LmLOYz0P0p8UY5FuT5KpZGuAawRmV3ZMBjxuHWqtRO+B8a9yyZetZS0jGKBA23U5BqLsZDe1Ga0RCGADFWAAbpfSlZBPdL1oUMgBxzTDFMuKaitgkgyeKlAsiFo0SyQ6c0tBRHaag6YSwsvGZD96QeARVeXEqpMzx6GjfECWNqIprVVhGBwO1Zpxk+BuirS76x8aaW0jB3ep6Vpw5HCNSF7JTQ77tZAocP8AMPSj+IO1IpttNEd/JPGWifPcVIp4naA4JjUrVMpNu2P0VPHmlIDxtG1wYVdTIOqjJI/KhTOni8I1WTGsqSUX8uhpGiwhPFO3d8pZSM/nQUknyN/pGqp7Un9GM4VHGzB9wa0Ra9jDPHODqapl+zjrTWLQLdBVU0wKEV2wyaAUhZI2DRslgzvzU3CMhjIpkwUdCe9MSj2KgSQX2o0CwywhTb4gjA3HljWaXdAsX/El7FHAIWUOrdTTbeCVYb8P6dajS0ugw3N2FMsMdu6RS506Gr+DAySW8o8YDO09Kyx1WR5ajH0/I+70lc2pRyyhwfN0YEdK3btzph5CIZBLGHXoaxzVSoZFwXjOKQgz1WDSfhP4l0a/RRD4yyQ3Uo6PkA7j9DjmuljxrtHReqyeV5U3a4o0t/HB9guZPPKswL5c7h07eg+lLqNvlScvYGl3LNHaz5w99LYsZIXIAPyNjBrjaWcpHsM2mhnhWRWaW1vI7u0jnjOVcfr3rcmeN1WB4MjgwW8k3A1aZRDcg5OagwBPwKRslAp9aXcLRzdTqRKJK+eKsTJRaAKZAJ8VahRJqHxFNGFht4tq/vWdYGnbYsIWU21pea0QWj8ONefP3p7UOyxKmarTdKMEQRpdwHQDoKz5XvK5RTYQ9nIjhkUNWKe/E/SJtom9oonV2jyjDDD3rVGdrkdWFxRLGoVRgUsm2x10EonHNKGgP4vtLn4k8GJ5zGYoThWHldieSSOnRf7dK148+yKLG7difTr/AF7Q9O/0fULiKZOsDI7PsT/pyQPwoZsqyraj0HgWkjlm80+l19RJeahK8oLuCFHAH81XDHGK4PUzSqkOvhvVjDN9lmk+7foMfKTTVTOB4nonmxb4L1L7GmmOc0x5JC24xzUsYUXTc1VJhA2NVslFTvjpVkSUWW5zVqAF+n0q1Ao5uqxEoZQ6NbwyqphEroMZ96yTzNmaKYxuLEGPYy7MjjFVbtxoT2glhZyWztuYlT0zSwTXYZtSGKL60ZJPsqJlAR0peiHFjwagxeqjFEdIn2xmjQ/Ql1pY2uBzg7QDxQ6Z7DwWLjpOPdmX1GyiGGaZ9oB42gfzVkZc0dlR3L1ENPtYJFHhySqyEHzEfXPSo5SI4xUaNjaMz2ibm3MBjPeimeG8V0n8PqG4riXINdgqDmg2c1Cafk0jYxQ3SgQocVbEjCLVcCrELYSw4qyISgk5q1DUbSG7tQQQBuFZJJNUc+ORold3KzedR+VUUoKkXKTZSPMM0y5Q6JovNBilwUUoyREgCikOkdBpqHo7tJpqI+jHSautzeX3iADwpPDTpyO3X3zStWe70ONYsKxR4pW/69gitDfvM1ztht4VG8gDc5yeOPoaZKjU5O6j7k1Fi+xomdFXhCjH9c81aolc8sumE2NzcWlwZhKs1uTzF/V9R60JUc7Pplni4S6Gl0VkQNGwZGAIIqiXB5PNhlhyOEhXLEc0BEQMWBmmSDQJIvNOhWX24OBViFovceWrYoZIH28045oBaKDwTWGrMuxBcKEDHajQaoJVOKjDRYq4pQUdJ460ErGRBqtjEY8KMkGyWTtpVy6Ddcnxy/udl48kZYDcTg48zZzVzglJx+D1MdRJ4YZZe8V19LCdPmeWK45H3hVwBwMcjP61IYZTnsijR/Gx02F5cj9NKi21juZpWESvlcZyD69qpnmWP8TL8ufG423YRNDdPKqMJdviEKcE8ce/tQ8+EkTFOMV6Xd/4NDokwlspIJCWeE/Of+Zyc49MVU5K1+ZxvGMaklk9whkpjhgsrYzTJEYE/mfApkVsMhTA6VbEByU9s1ch0RC5qDGm4FZEUE1IzxUIXrQIWZwuaUhTI3PFPFBJL71ekQnt4zSyQSDOOlVpUyPo+Q6nbGO/urZ8BopWAJx0ySKtm/VZ6jRNZcEIfCoH0y4MbtE68FWVT0x3A/MVt0LS1EX88HM8TuWhlif+12h/pGpGG6RCo2vkFu/sfw5/Oj4z4cs9ZIcV2cDw/WSw+l8o11h9iltx4C4VWYc8HOea8Xq4ZMOVxl+0en02pU8aaYRDbRRkkKPMCufQnnP51XjzSU0/3+6H1EnLG4sCucKOK9CjiCqduacRkIV8+TTJADBwKtiiUDSEmSrUMi5AdtAYePKFNZCkmkvGRioAv8XPPSoQmZRtxmlIiHO/2qKVDF6jirlIhMk4xRIDyBhzSBMrr2hNfXgurbaJH8sm7oy/5irFONVI04NTLEzOaLorXUsn2sukMDBSFHnaQnAUZ75HU9KtjBr1XVGt6yDTUo7t3t9fkCvttjfyW4njdonKhkbIP+ZruLLHNBP5PMzwShJj/QdUt0jCyTAbd2Tn1wR+ua834h4Zkyzcsavr9TXptWsSipmvtbi3mOFmQq3cH6EftXlpYckZKNU+v0/U7fnwlG7Fk7fP38xx9O36V6fJieGex+xy8eVZI7kLZDlqASyPinSITLVdFBRFRk04UFIvFAJoja2NhaCXUVknupuIbWMnj/ux+1JHEkvUJGNhOlKt7atvjjt1XylJgA2e2D/mathGMlVBnFIE1CNLe4aOPPlO1lznae4qjPiWN8dFCBlJyM5rOMgiNsmhtGCFPvTxTIzp6jFPZDjKZPKATn0pWmwkXsntR9puodsC+Y7+AB2p8WLdNbuiNcGD1r4ne4nEWkLtkQyTyymPKOV4OPbqM/Stbk+n0OkYG6ukmmWWJX39XZjye3SrYT8tqiSx7l6gqCfDBx36104ZFJKSObkxvph9tdmOQ+ZgPmGDUlGDdtFEoSrg1thN40b5JJXHX6f71zfFsVOORF3h0+HB+xJx5q5SOiyarVsUQ6Rtq4JKBcmiEPWPilsm4DvHvNZ1A30ss9pDgeHFG21ifU+lVSn8AcqVIe6bfKjSJfvJJ4oCrNkbk7demMe1WYptPkW9xfcW1kt/K9pKpFw+5stkhhwc/lUyx3u7BtYFJd20Vx4BkZmC7jtHH4ZqtY18h2sv1LUdG0tEaW/jmnJw1skqhuOp78f3p/Lig0AXfxPph2yWfiEeUtEFLnPoCBz+VTZFE2otT4kjdV8LSb+WUL5VFu6K/wD5MMDt19KVx5DSB5Zvii8uBLHLb2SNtJy24pjsFXj9aa0C0i6a1vLmVpdU1Se7XOVgA8ONT6gDn1796G6uiOVgsWn29tIrx7sIGCIT5Uz1xQbbQLML8WfD32OZ72yjJtXOXVR/wj/b9quhK0X45p8SA9Eto7uyuoHCrKkiFJPc5GPpkLWrFJpcFOeKT5+CC28zsflXYcHjPPcV0oRlkW5HOnKMXTNF8NfaMzeLwgUAH15/jFYPE3JY4xkvcs00YublEb53PXHRtYSqcVfFEK5PmxVlBLoMJyarkyNnmmkLHHAqhtlQe6gkkc5oxQ7Obcgqeh/SrUBAKaI4kWT/AFW8BX5QuwY9+lG69htzPNoWnmQyTiad+5lmY/oMCk3NEthlnZ2lvJm3to0JwCQuSfxPNFMjY1C7R0wPaoKVk+bOTShLeCKKADXA601AsXylqFBIpgghgCCMEVLoJkfiLToNFvI5rBTGtyjHwwfKHUqRj069Kux5auzTiwvPGvgXtGLjVZDZttMgRgGPHII5/Gul5rx7XDp1ZixaZZd2OXDjf+Bto++MuuTtIwd/zKR/Sas1mJ5MLXwZMEoxna9x1Zx7uTXAgrOgHSptjrQkQDRS8v40wQrwGK4AqtqyNEhC2ORUWMFFqS8VSKdMvNMmFI743YUzHoIihMvTrSJWBjGG1CbeOauUKK2zs6YU0JIlgLnBqoJJXqJkIyncPemsDA3jPejYSAXZSMIo+K4DNpsMy9YZcn6EYP8AFB9G/QSrJt+TLQFY9RjfoPuSx9gxzW5zvHFfl9mxscduec69/ukFyXrWnxRLHKu2G62hx2WQeXI/Fa249U5ze737+vRzdVoVgSWPpL/DdmxtIgFBXoea5MY7XRFyrO3T4U1cMU2SZbJ7moEbxxjZ0qJEZBxg0QAdrbSXCb4mTHoW5/KsjXJVLLGHYPerJbPtkBB6j0NFIshOMlcSuydriUAD8adK+CyzV2EAjAq1QoplKw19qjrTCWBXUq42g81XJjIXzIWXgc9apYSAJAx3oER0NUGo64BFQhQ4yeKPYAbU4hNptzDjJaM4HuORQosxz2STMKFF0JcdfCAU57jzH9M1pjKLlCP1OhNTjjnN/k/7McT6PHq7XcqMElYrIhPIIkQPg/8AtVbm1MmsbioX+a/szR2SzQ2MEdyytMsYDlehOKbt2cwqnyxApglttHg1BhrHgIBjJxTpCFEnzdajAJdP0nVzBBdI6RLjKq5IJFc3M4bKydGben6R9IpuLUw30QUY+YHOD6isen1lT2Tla+QKLg7SBdCs2Juty7WidQvHDg9xXSWoUMkYy9y3zLQ78ZIYvEkyEzgNtOCfY96snqsUe3wJvQp1/WEs4A6tkn5Tnii80Wrixk7E2n67JcSBZVByeuaqUnJ8kc6GEut2Mcvg+Jk9M+lRzinQYzsK4IDAgqRnIossTKyw3UoxYGBFFIJU5ANWVwIypn7DuaqkFGRkgSHUzbjsXA+hU4/cU2HjIn+a+525T83TJP4a/shvoJwYc/12aDr1KEp+wWrcq9X7+SvWK8Cb9n91/wBjS4bFRHJKoxuYZojIORQo3UyCyZmAHXmrLEBJJiWJ/mlbJQkj+Jr2baj3AVVUKm1QBge1cXU6XzXbdmfZt6G+nai93II5p0BYeUsvzH0rNj8Pwze23FkthkeoyojxYCTRHBIHUdsVbqMbhBKb5j0Uu4lVzfSzgNJIWYcKD0FY8mWU+xTLfEFxLNGLeGMmNTkse7e1dHTYJQjul7mjGqBtOt51tnYnb6DvW1J0M42FaZBak+JeSbTnOG45qtYkuWThGmSaLw1ELAqOmKuVDokDk0BkTzimAVOaNkILyaSQUKNas8X1reLwB5HHrwcfviq1k2Jv6G/RXKez6/YG0qcRX9pGQcAzxj6F81qyP+Y4/mzp5MW/ROX/ABiaC464NQ86Rh4NFFiCGlAXFWJAB2bc3FRgOEUhBVrdjpa6u0XmhaTGCnQH6Vn2wffuZ8auKs9OqaO8Vs7idQdwZuwPtS5cdcXyCcDQWj6fLYvcuYU3HzHPJb96pmoTh6kZmpOVMVahKpkEVq3h5+Z2OT+ArPDFhhLcWxpK2VPFGxTe5Y9sVperV1QVl56CLeA79ix7iOwFaN18l18BzaeJY8S2v47aTfH5JaYGdLEMoMDMg7r2oqPug7fgOEewA5zTjnGYFD6mlADb8tijYC+MZxQYyO6lZmbTJgoBYDcPqOf2pdlo0afJsyKRl5fJDZXuDgXHX2wP/mmm/wCZfyl9j02CPmaVw+q+/wD4jQ3D5cirqPJrothj4Bp0iFdz5TxTkIQAk0rZCb/NxSAM/rskckqcsLnHnjx8vvmsMp+ZFSKYNtWDw213fQg/O4OBk80yk2uQylyMINFmtbeSOWcZcZCHnDDoaM8ScbQXFS5RTGkkhVQdzA9q5+x7qRlaSY502KO1bM6LNz5gf6fetCxyxLc1YXF0aZruxiRTZW43Y64xVme8sUoA3fIHPrM4J+7XHpWF6CT53lsZJlUzSXUe9UAYDJFb9NHb6d1jqcUA+LkHPG3rWkuXIxtrS1kt98kh3GrFjVWZJ56lRCLS2JJWQFR04pdo3nI6Lfw5cPjjvQcS6Mk0ECWItsDrk8AZ60U4jKVGZ1+zW106a3hXEUT+IgznjIP8msjl6uT2mi2+XFx90gyyhNyscvVdoz+Vb4K0eSzw2ZZR+GxqYVWPy9BVlFViy6IJwKhCIPhrVbIVF8mgQQFRPqEk0oDPnFZMvpSoV+mFI0GlxRpbvsjVSBncOtHG93Zm7ZBBudAxJ3ZzV1c0XII01UDq4RQx74+tCGOKd0Y8v4qOwqJC7NySxzVrVo0N1Enpy+JO8ZZgoOAAawYn6mjM2WXkQtp32FjtHBY1m8Rm41Fe40nwWadI28dzJ1Jq/wALxxpy9xJfhsF1YCN2VRgEc10ZLk3YG3AO02BZYFViwGOxqueRxjwYZK5WHwjYpQdAM08HcUwNUWWsMd3cMkyAqB2ofidMvg+DHahCItckijZwoPHm6Vz5qstBtjPVIU+wSqQSPBPJ69DTTilN/wBD13g2ST0sL+WiXw15tItmPUrz+ddPF+E5fiSrVzr5/QbXShbckVYYDPSHk0rCcbzJzVRAYkg1CH//2Q==' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Pauline</Text>
          </View>

          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Bella</Text>
          </View>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YIGV8GTRHiW_KACLMhhi9fEq2T5BDQcEyA&s' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>Charlie</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Adopt?</Text>
        <Text style={styles.sectionDescription}>
          Adopting a pet means giving a homeless animal a second chance. Here's why it's a great decision:
        </Text>
        <View style={styles.benefitsContainer}>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitTitle}>Save a Life</Text>
            <Text style={styles.benefitDescription}>By adopting, you help reduce the number of animals in shelters.</Text>
          </View>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitTitle}>Support Adoption</Text>
            <Text style={styles.benefitDescription}>You contribute to a growing movement of pet adoption worldwide.</Text>
          </View>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitTitle}>A Loyal Companion</Text>
            <Text style={styles.benefitDescription}>Adopted pets are incredibly loving and loyal, making them the perfect companion.</Text>
          </View>
        </View>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Have Questions?</Text>
        <Text style={styles.contactDescription}>
          Reach out to us for more details or any inquiries about the adoption process.
        </Text>
     
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  heroImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  heroContent: {
    padding: 20,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  heroButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  sectionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignSelf: 'center',
  },
  sectionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  petCarousel: {
    marginBottom: 30,
  },
  petCard: {
    width: 120,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  petImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  benefitCard: {
    backgroundColor: '#fff',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  contactSection: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginTop: 30,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
