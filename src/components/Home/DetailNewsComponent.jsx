import React, { Fragment, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { Context as NewsContext } from '../../services/context/NewsContext'
import { Icon, Spinner } from 'native-base';
import HTML from "react-native-render-html";

var { width } = Dimensions.get('window')

const DetailNewsComponent = ({ id, title, image }) => {

    const { state, NewsDetail } = useContext(NewsContext)

    useEffect(() => {
        NewsDetail(id)
        return () => {
            null
        };
    }, []);

    const htmlContent = `<p><span style="color: #000000; font-size: 14pt;">Komisi V DPR memberondong Menteri PUPR&nbsp;<a style="color: #000000;" href="https://www.detik.com/tag/basuki-hadimuljono">Basuki Hadimuljono</a>, Menteri Perhubungan Budi Karya Sumadi, dan Menteri Desa dan PDTT Abdul Halim Iskandar dengan pertanyaan perihal pemotongan anggaran di tahun 2021.</span></p>
    <p><span style="color: #000000; font-size: 14pt;">Mereka mempertanyakan apakah di tahun depan akan ada potensi pemotongan anggaran lagi dengan refocusing dan realokasi. Tahun ini sendiri seluruh kabinet sudah melakukan pemotongan anggaran dan mengalihkannya untuk penanganan&nbsp;<a style="color: #000000;" href="https://www.detik.com/tag/virus-corona">virus Corona</a>.</span></p>
    <p><span style="color: #000000; font-size: 14pt;">"Saya ingatkan bahwa kita harus siapkan kondisi apabila ke depan harus terjadi refocusing atau realokasi lagi. Langkah itu apa sudah disiapkan, kita tentu berharap agar tidak ada lagi," ujar wakil ketua komisi V Iwan Darmawan, dalam rapat kerja di ruang Komisi V DPR Jakarta, Rabu (2/9/2020).</span></p>
    <p><span style="color: #000000; font-size: 14pt;">Ketua Komisi V Lasarus menambahkan bahwa tidak ada yang tahu kapan kondisi bisa jadi normal. Maka dari itu, dia mempertanyakan apakah kementerian sudah menghitung secara matang proyeksi anggarannya di tahun 2021 sehingga menjadi pakem dan tak perlu diubah.</span></p>
    <p><span style="color: #000000; font-size: 14pt;">"Apakah nanti kita ini nggak ada refocusing lagi? Saya jadi mikir nih, nggak ada yang tahu kapan COVID-19 ini selesai. Apakah skema yang bapak-bapak bangun sudah dihitung secara matang dari segala aspek terutama ekonomi? Apakah nanti skema ini sudah pakem untuk tidak diubah lagi," ujar Lasarus.</span></p>
    <p><span style="color: #000000; font-size: 14pt;">"Saya rasa kementerian harus sikapi ini. Kalau andaikata refocusing lagi, pasti akan kewalahan nih," ungkapnya.</span></p>
    `;

    return (
        <Fragment>
            {/* <Text> {JSON.stringify(state.newsDetail)} </Text> */}
            <View style={{ height: 300 }}>
                <ImageBackground style={{ width: width, height: 300 }} source={{ uri: image }} />
            </View>
            <View style={styles.contentSection}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {state.loading && (
                    <Spinner color='blue' />
                )}
                {!state.loading && (
                    <Fragment>
                        <View style={styles.informationSection}>
                            <View style={styles.authorSection}>
                                <Icon name='ios-person' style={{ color: 'grey', fontSize: 20 }} />
                                <Text style={styles.authorName}>{state.newsDetail.author}</Text>
                                <Icon name='ios-pricetag' style={{ color: 'grey', fontSize: 20 }} />
                                <Text style={styles.authorName}>{state.newsDetail.category}</Text>
                            </View>
                            <View style={styles.authorSection}>
                                <Icon name='md-time' style={{ color: 'grey', fontSize: 20 }} />
                                <Text style={styles.authorName}>{state.newsDetail.created_at}</Text>
                            </View>
                        </View>
                        <View style={styles.bodySection}>
                            <HTML
                                html={state.newsDetail.content}
                                imagesMaxWidth={width}
                            />
                        </View>
                    </Fragment>
                )}

            </View>
        </Fragment>
    )
}

export default DetailNewsComponent

const styles = StyleSheet.create({
    fondoBanner: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10
    },
    textBanner: {
        fontSize: 20,
        color: 'white',
    },
    contentSection: {
        margin: 12
    },
    informationSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleSection: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    authorSection: {
        flexDirection: 'row'
    },
    authorName: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 13,
        marginHorizontal: 10
    },
    bodySection: {
        marginTop: 15
    }
})
