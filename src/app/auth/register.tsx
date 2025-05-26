import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'src/constants/colors';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.scrollViewContent}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 40 }}>
          <View className="items-center mb-12">
            <Text className="text-4xl font-bold text-center text-gray-900 mb-4">
              Регистрация
            </Text>
            <Text className="text-lg text-center text-gray-600">
              Создайте новый аккаунт
            </Text>
          </View>

          <View className="space-y-6 mb-8 w-[400px] mx-auto">
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Имя</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Введите имя"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Email</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Введите email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Пароль</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Введите пароль"
                secureTextEntry
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Подтверждение пароля</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Подтвердите пароль"
                secureTextEntry
              />
            </View>
          </View>

          <View className="space-y-4 w-[240px] mx-auto">
            <TouchableOpacity className="bg-blue-600 p-4 rounded-xl shadow-sm">
              <Text className="text-white text-center font-semibold text-lg">
                Зарегистрироваться
              </Text>
            </TouchableOpacity>
            
            <View className="flex-row justify-center space-x-2">
              <Text className="text-gray-600">Уже есть аккаунт?</Text>
              <Link href="/auth/login">
                <Text className="text-blue-600 font-medium">Войти</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: COLORS.background.secondary,
  },
});